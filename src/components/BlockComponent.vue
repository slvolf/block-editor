<template>
  <div
    :id="block.id"
    :class="{ 'block-component': true, selected: isSelected() }"
    :style="{
      left: `${block.x}px`,
      top: `${block.y}px`,
      fontSize: `${fontSize * scale}px`,
    }"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseLeave"
  >
    <!-- 只用一个 textarea 显示和编辑 plain-text -->
    <template v-if="block.type === 'plain-text'">
      <textarea
        class="block-edit-input"
        v-model="editValue"
        :readonly="!editing"
        @click="startEdit"
        @blur="saveEdit"
        @keyup.esc="saveEdit"
        :style="{
          fontSize: `${fontSize * scale}px`,
          minWidth: '100px',
          width: 'auto',
          maxWidth: '400px',
          height: '100%',
          minHeight: '60px',
          resize: 'vertical',
          boxSizing: 'border-box',
          overflowX: 'auto',
          whiteSpace: 'pre', // 关键：不自动换行
        }"
        autofocus
      />
    </template>
    <template v-if="block.type === 'html'">
      <div v-html="block.html"></div>
    </template>
    <template v-if="block.type === 'markdown'">
      <div v-html="block.html"></div>
    </template>
    <template v-if="block.type === 'latex'">
      <div v-html="block.html"></div>
    </template>
    <!-- 滚轮调整大小的手柄 -->
    <div class="resize-handle" @mousedown="onResizeStart"></div>
    <!-- 四条边的调整手柄，只有按下Alt时显示 -->
    <div
      v-if="isAltPressed"
      class="resize-handle handle-left"
      @mousedown="(e) => onResizeStart(e, 'left')"
    ></div>
    <div
      v-if="isAltPressed"
      class="resize-handle handle-right"
      @mousedown="(e) => onResizeStart(e, 'right')"
    ></div>
    <div
      v-if="isAltPressed"
      class="resize-handle handle-top"
      @mousedown="(e) => onResizeStart(e, 'top')"
    ></div>
    <div
      v-if="isAltPressed"
      class="resize-handle handle-bottom"
      @mousedown="(e) => onResizeStart(e, 'bottom')"
    ></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  reactive,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "BlockComponent",
  props: {
    block: {
      type: Object,
      required: true,
    },
    selectedBlockId: {
      type: String as PropType<string | null>,
      default: null,
    },
    scale: {
      type: Number,
      default: 1,
    },
    fontSize: {
      type: Number,
      default: 16,
    },
    editorCenterX: {
      type: Number,
      required: true,
    },
    editorCenterY: {
      type: Number,
      required: true,
    },
  },
  emits: ["blockSelected", "update:block"],
  setup(props, { emit }) {
    const isBlockDragging = ref(false);
    const isResizing = ref(false);
    const startX = ref(0);
    const startY = ref(0);
    const startWidth = ref(0);
    const startHeight = ref(0);

    const isSelected = () => props.block.id === props.selectedBlockId;

    const onMouseDown = (event: MouseEvent) => {
      // 只允许 Alt + 鼠标中键拖动 block
      if (event.button === 1 && event.altKey && isSelected()) {
        isBlockDragging.value = true;
        startX.value = event.clientX;
        startY.value = event.clientY;
        event.stopPropagation();
        return;
      }
      // 普通左键点击用于选中
      if (event.button === 0 && !isSelected()) {
        emit("blockSelected", props.block.id);
      }
    };

    const isAltPressed = ref(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) isAltPressed.value = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.altKey) isAltPressed.value = false;
    };

    onMounted(() => {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    });

    // 本地副本
    const localBlock = reactive({ ...props.block });

    watch(
      () => props.block,
      (newBlock) => {
        Object.assign(localBlock, newBlock);
      },
      { deep: true }
    );

    const onMouseMove = (event: MouseEvent) => {
      if (isBlockDragging.value) {
        const dx = event.clientX - startX.value;
        const dy = event.clientY - startY.value;
        localBlock.x += dx;
        localBlock.y += dy;
        startX.value = event.clientX;
        startY.value = event.clientY;
        emit("update:block", { ...localBlock });
      }
      if (isResizing.value) {
        const dx = event.clientX - startX.value;
        const dy = event.clientY - startY.value;
        const newWidth = Math.max(10, startWidth.value + dx);
        const newHeight = Math.max(10, startHeight.value + dy);

        // 1. 缩放前 block 中心点
        const oldCenterX = props.block.x + props.block.width / 2;
        const oldCenterY = props.block.y + props.block.height / 2;

        // 2. 计算与编辑区中心的偏移
        const deltaX = oldCenterX - props.editorCenterX;
        const deltaY = oldCenterY - props.editorCenterY;

        // 3. 按缩放比例调整偏移
        const scaleRatio = newWidth / startWidth.value;
        const newDeltaX = deltaX * scaleRatio;
        const newDeltaY = deltaY * scaleRatio;

        // 4. 新中心点
        const newCenterX = props.editorCenterX + newDeltaX;
        const newCenterY = props.editorCenterY + newDeltaY;

        // 5. 反推新的 x/y
        localBlock.width = newWidth;
        localBlock.height = newHeight;
        localBlock.x = newCenterX - newWidth / 2;
        localBlock.y = newCenterY - newHeight / 2;

        emit("update:block", { ...localBlock });
      }
    };

    const onMouseUp = () => {
      isBlockDragging.value = false;
      isResizing.value = false;
    };

    const onMouseLeave = () => {
      isBlockDragging.value = false;
      isResizing.value = false;
    };

    const onResizeStart = (event: MouseEvent) => {
      isResizing.value = true;
      startX.value = event.clientX;
      startY.value = event.clientY;
      startWidth.value = props.block.width || 0;
      startHeight.value = props.block.height || 0;
    };

    // 编辑相关
    const editing = ref(false);
    const editValue = ref(props.block.content);

    watch(
      () => props.block.content,
      (val) => {
        if (!editing.value) editValue.value = val;
      }
    );

    const startEdit = () => {
      editing.value = true;
    };

    const saveEdit = () => {
      editing.value = false;
      if (editValue.value !== props.block.content) {
        localBlock.content = editValue.value;
        emit("update:block", { ...localBlock });
      }
    };

    return {
      isSelected,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,
      onResizeStart,
      editing,
      editValue,
      startEdit,
      saveEdit,
      isAltPressed,
    };
  },
});
</script>

<style scoped lang="scss">
.block-component {
  position: absolute;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: white;
  z-index: 1;
  min-width: 100px;
  min-height: 50px;
  cursor: move;

  &.selected {
    border-color: #42b983;
  }
}

.block-edit-input {
  min-width: 100px;
  width: auto;
  max-width: 400px;
  height: 100%;
  min-height: 60px;
  box-sizing: border-box;
  resize: vertical;
  font-family: inherit;
  background: transparent;
  border: none;
  outline: none;
  white-space: pre; // 不自动换行
  word-break: normal;
  overflow-x: auto; // 横向滚动条
  overflow-y: auto;
}

.resize-handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #42b983;
  cursor: nwse-resize;
}
</style>
