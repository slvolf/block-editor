<template>
  <div
    :id="block.id"
    :class="{ 'block-component': true, selected: isSelected() }"
    :style="{
      left: `${block.x}px`,
      top: `${block.y}px`,
      width: `${block.width}px`,
      height: `${block.height}px`,
      fontSize: `${fontSize * scale}px`,
    }"
    @mousedown="onMouseDown"
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
        :style="{ fontSize: `${fontSize * scale}px` }"
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
    <!-- 右下角整体缩放手柄 -->
    <div
      class="resize-handle"
      @mouseenter="hoverCorner = true"
      @mouseleave="hoverCorner = false"
      @mousedown="(e) => onResizeStart(e, 'corner')"
      :style="{
        opacity: hoverCorner && isAltPressed ? 1 : 0,
        pointerEvents: isAltPressed ? 'auto' : 'none',
      }"
    ></div>
    <!-- 四条边的手柄 -->
    <div
      class="resize-handle handle-left"
      @mouseenter="hoverLeft = true"
      @mouseleave="hoverLeft = false"
      @mousedown="(e) => onResizeStart(e, 'left')"
      :style="{
        opacity: hoverLeft && isAltPressed ? 1 : 0,
        pointerEvents: isAltPressed ? 'auto' : 'none',
      }"
    ></div>
    <div
      class="resize-handle handle-right"
      @mouseenter="hoverRight = true"
      @mouseleave="hoverRight = false"
      @mousedown="(e) => onResizeStart(e, 'right')"
      :style="{
        opacity: hoverRight && isAltPressed ? 1 : 0,
        pointerEvents: isAltPressed ? 'auto' : 'none',
      }"
    ></div>
    <div
      class="resize-handle handle-top"
      @mouseenter="hoverTop = true"
      @mouseleave="hoverTop = false"
      @mousedown="(e) => onResizeStart(e, 'top')"
      :style="{
        opacity: hoverTop && isAltPressed ? 1 : 0,
        pointerEvents: isAltPressed ? 'auto' : 'none',
      }"
    ></div>
    <div
      class="resize-handle handle-bottom"
      @mouseenter="hoverBottom = true"
      @mouseleave="hoverBottom = false"
      @mousedown="(e) => onResizeStart(e, 'bottom')"
      :style="{
        opacity: hoverBottom && isAltPressed ? 1 : 0,
        pointerEvents: isAltPressed ? 'auto' : 'none',
      }"
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

    const hoverLeft = ref(false);
    const hoverRight = ref(false);
    const hoverTop = ref(false);
    const hoverBottom = ref(false);
    const hoverCorner = ref(false);

    const isSelected = () => props.block.id === props.selectedBlockId;

    const onMouseDown = (event: MouseEvent) => {
      // 只允许 Alt + 鼠标中键拖动 block
      if (event.button === 1 && event.altKey && isSelected()) {
        isBlockDragging.value = true;
        startX.value = event.clientX;
        startY.value = event.clientY;
        addGlobalListeners();
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

    const resizingEdge = ref<
      "corner" | "left" | "right" | "top" | "bottom" | null
    >(null);
    const startLeft = ref(0);
    const startTop = ref(0);

    const onMouseMove = (event: MouseEvent) => {
      if (isResizing.value && resizingEdge.value) {
        const dx = event.clientX - startX.value;
        const dy = event.clientY - startY.value;

        switch (resizingEdge.value) {
          case "corner": {
            // 右下角缩放
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
            break;
          }
          case "left":
            // 左边缩放
            localBlock.x = startLeft.value + dx;
            localBlock.width = startWidth.value - dx;
            break;
          case "right":
            // 右边缩放
            localBlock.width = startWidth.value + dx;
            break;
          case "top":
            // 上边缩放
            localBlock.y = startTop.value + dy;
            localBlock.height = startHeight.value - dy;
            break;
          case "bottom":
            // 下边缩放
            localBlock.height = startHeight.value + dy;
            break;
        }
        emit("update:block", { ...localBlock });
        return;
      }
      if (isBlockDragging.value) {
        const dx = event.clientX - startX.value;
        const dy = event.clientY - startY.value;
        localBlock.x += dx;
        localBlock.y += dy;
        startX.value = event.clientX;
        startY.value = event.clientY;
        emit("update:block", { ...localBlock });
      }
    };

    const addGlobalListeners = () => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };
    const removeGlobalListeners = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseUp = () => {
      isBlockDragging.value = false;
      isResizing.value = false;
      resizingEdge.value = null;
      removeGlobalListeners();
    };

    const onResizeStart = (
      event: MouseEvent,
      edge: "corner" | "left" | "right" | "top" | "bottom"
    ) => {
      isResizing.value = true;
      resizingEdge.value = edge;
      startX.value = event.clientX;
      startY.value = event.clientY;
      startWidth.value = props.block.width || 0;
      startHeight.value = props.block.height || 0;
      startLeft.value = props.block.x || 0;
      startTop.value = props.block.y || 0;
      addGlobalListeners();
      event.stopPropagation();
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
      onResizeStart,
      editing,
      editValue,
      startEdit,
      saveEdit,
      isAltPressed,
      hoverLeft,
      hoverRight,
      hoverTop,
      hoverBottom,
      hoverCorner,
    };
  },
});
</script>

<style scoped lang="scss">
.block-component {
  position: absolute;
  border: 1px solid #ccc;
  padding: 0;
  background-color: white;
  z-index: 1;
  min-width: 1px;
  min-height: 1px;
  cursor: move;

  &.selected {
    border-color: #42b983;
  }
}

.block-edit-input {
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 0;
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
  background: #42b983;
  z-index: 2;
}

.handle-left {
  left: -4px;
  top: 0;
  width: 8px;
  height: 100%;
  cursor: ew-resize;
}

.handle-right {
  right: -4px;
  top: 0;
  width: 8px;
  height: 100%;
  cursor: ew-resize;
}

.handle-top {
  top: -4px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: ns-resize;
}

.handle-bottom {
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: ns-resize;
}
</style>
