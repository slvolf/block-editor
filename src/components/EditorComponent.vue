<template>
  <div
    class="editor-container"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mousewheel="onMouseWheel"
    ref="editorRef"
  >
    <div
      class="editor-content"
      :style="{
        width: editorWidth + 'px',
        height: editorHeight + 'px',
        transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
        transformOrigin: 'top left',
      }"
    >
      <!-- 网格线 -->
      <div
        v-for="x in gridCountX"
        :key="'v' + x"
        class="grid-line-vertical"
        :style="{ left: x * gridGap + 'px' }"
      ></div>
      <div
        v-for="y in gridCountY"
        :key="'h' + y"
        class="grid-line-horizontal"
        :style="{ top: y * gridGap + 'px' }"
      ></div>

      <BlockComponent
        v-for="block in visibleBlocks"
        :key="block.id"
        :block="block"
        :selectedBlockId="selectedBlockId"
        :scale="scale"
        :editorCenterX="editorCenterX"
        :editorCenterY="editorCenterY"
        @blockSelected="onBlockSelected"
        @update:block="onBlockUpdate"
      />
    </div>
    <input
      type="file"
      ref="fileInput"
      @change="onFileSelected"
      style="display: none"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";
import BlockComponent from "./BlockComponent.vue";
import {
  PlainTextBlock,
  HTMLBlock,
  MarkdownBlock,
  LaTeXBlock,
} from "../blocks/index"; // 假设这些类在 blocks 目录下的 index.ts 中导出
import { ipcRenderer } from "@/utils/electron";

interface BlockData {
  id: string;
  name: string;
  type: string;
  content?: string;
  html?: string;
  markdown?: string;
  latex?: string;
}

type Block = PlainTextBlock | HTMLBlock | MarkdownBlock | LaTeXBlock;

export default defineComponent({
  name: "EditorComponent",
  components: {
    BlockComponent,
  },
  setup() {
    const editorRef = ref<HTMLElement | null>(null);
    const fileInput = ref<HTMLInputElement | null>(null);

    // 编辑区总宽高
    const editorWidth = 10000;
    const editorHeight = 10000;
    // 编辑区中心点坐标
    const editorCenterX = editorWidth / 2;
    const editorCenterY = editorHeight / 2;

    // 先用 0 初始化，onMounted 时再设置
    const offsetX = ref(0);
    const offsetY = ref(0);

    onMounted(() => {
      // 获取视口尺寸
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      // 让编辑区中心点对齐视口中心
      offsetX.value = viewportWidth / 2 - editorWidth / 2;
      offsetY.value = viewportHeight / 2 - editorHeight / 2;
    });

    const defaultBlockWidth = 200;
    const defaultBlockHeight = 100;

    const blocks = ref<Block[]>([
      new PlainTextBlock(
        "1",
        "中心文本",
        "这是居中的文本块",
        editorWidth / 2 - defaultBlockWidth / 2,
        editorHeight / 2 - defaultBlockHeight / 2,
        defaultBlockWidth,
        defaultBlockHeight
      ),
      // 可以添加更多不同类型的块
    ]);
    const scale = ref(1);
    const isEditorDragging = ref(false);
    const startX = ref(0);
    const startY = ref(0);
    const selectedBlockId = ref<string | null>(null);
    const fontSize = ref(16); // 默认字体大小

    const gridGap = Math.max(10, 50);
    const gridCountX = Math.ceil(editorWidth / gridGap);
    const gridCountY = Math.ceil(editorHeight / gridGap);

    const visibleBlocks = computed(() => {
      if (!editorRef.value) return [];
      const rect = editorRef.value.getBoundingClientRect();
      return blocks.value.filter((block) => {
        const blockX = block.x * scale.value + offsetX.value;
        const blockY = block.y * scale.value + offsetY.value;
        const blockWidth = block.width * scale.value;
        const blockHeight = block.height * scale.value;

        // 四个角的坐标
        const corners = [
          { x: blockX, y: blockY }, // 左上
          { x: blockX + blockWidth, y: blockY }, // 右上
          { x: blockX, y: blockY + blockHeight }, // 左下
          { x: blockX + blockWidth, y: blockY + blockHeight }, // 右下
        ];

        // 判断任意一个角在视图内
        return corners.some(
          (corner) =>
            corner.x >= rect.left &&
            corner.x <= rect.right &&
            corner.y >= rect.top &&
            corner.y <= rect.bottom
        );
      });
    });

    const onMouseDown = (event: MouseEvent) => {
      if (event.button === 1 && event.ctrlKey) {
        isEditorDragging.value = true;
        startX.value = event.clientX;
        startY.value = event.clientY;
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (isEditorDragging.value) {
        const dx = event.clientX - startX.value;
        const dy = event.clientY - startY.value;
        offsetX.value += dx;
        offsetY.value += dy;
        startX.value = event.clientX;
        startY.value = event.clientY;
      }
    };

    const onMouseUp = () => {
      isEditorDragging.value = false;
    };

    const onMouseWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        const zoomFactor = 0.1;
        scale.value += event.deltaY < 0 ? zoomFactor : -zoomFactor;
        scale.value = Math.max(0.1, Math.min(2, scale.value));

        // 以编辑区中心为缩放原点
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        offsetX.value = viewportWidth / 2 - editorCenterX * scale.value;
        offsetY.value = viewportHeight / 2 - editorCenterY * scale.value;
      }
    };

    const saveToFile = () => {
      const data = JSON.stringify(blocks.value.map((block) => block.toJSON()));
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "blocks.json";
      a.click();
      URL.revokeObjectURL(url);
    };

    const openFile = () => {
      if (fileInput.value) {
        fileInput.value.click();
      }
    };

    const onFileSelected = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const data = JSON.parse(reader.result as string);
          blocks.value = (data as BlockData[])
            .map((blockData: BlockData) => {
              switch (blockData.type) {
                case "plain-text":
                  return new PlainTextBlock(
                    blockData.id,
                    blockData.name,
                    blockData.content
                  );
                case "html":
                  return new HTMLBlock(
                    blockData.id,
                    blockData.name,
                    blockData.html
                  );
                case "markdown":
                  return new MarkdownBlock(
                    blockData.id,
                    blockData.name,
                    blockData.markdown
                  );
                case "latex":
                  return new LaTeXBlock(
                    blockData.id,
                    blockData.name,
                    blockData.latex
                  );
                default:
                  return null;
              }
            })
            .filter((block): block is Block => block !== null);
        };
        reader.readAsText(file);
      }
    };

    const onBlockSelected = (blockId: string) => {
      selectedBlockId.value = blockId;
    };

    const onBlockUpdate = (updatedBlock: Block) => {
      const idx = blocks.value.findIndex((b) => b.id === updatedBlock.id);
      if (idx !== -1) {
        Object.assign(blocks.value[idx], updatedBlock);
      }
    };

    const moveStep = 10;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        saveToFile();
      }
      if (event.ctrlKey && event.key.toLowerCase() === "o") {
        event.preventDefault();
        openFile();
      }

      // Alt + 方向键移动选中 block
      if (event.altKey && selectedBlockId.value) {
        const idx = blocks.value.findIndex(
          (b) => b.id === selectedBlockId.value
        );
        if (idx === -1) return;

        let moved = false;
        switch (event.key) {
          case "ArrowLeft":
            blocks.value[idx].x -= moveStep;
            moved = true;
            break;
          case "ArrowRight":
            blocks.value[idx].x += moveStep;
            moved = true;
            break;
          case "ArrowUp":
            blocks.value[idx].y -= moveStep;
            moved = true;
            break;
          case "ArrowDown":
            blocks.value[idx].y += moveStep;
            moved = true;
            break;
        }
        if (moved) {
          event.preventDefault();
        }
      }
    };

    onMounted(() => {
      window.addEventListener("keydown", handleKeydown); // 这一行很关键！
      if (editorRef.value) {
        editorRef.value.addEventListener("contextmenu", (event) => {
          event.preventDefault();
        });
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleKeydown);
    });

    // **添加事件监听**
    // 监听主进程发送的 "save-file-triggered" 事件
    if (ipcRenderer) {
      ipcRenderer.on("save-file-triggered", () => {
        saveToFile(); // 调用当前组件的保存方法
      });
    }

    // 监听主进程发送的 "open-file-triggered" 事件
    if (ipcRenderer) {
      ipcRenderer.on("open-file-triggered", () => {
        openFile(); // 调用当前组件的打开方法
      });
    }

    // 清理监听（避免内存泄漏）
    onBeforeUnmount(() => {
      if (ipcRenderer) {
        ipcRenderer.removeAllListeners("save-file-triggered");
        ipcRenderer.removeAllListeners("open-file-triggered");
      }
    });

    return {
      editorRef,
      fileInput,
      blocks,
      editorWidth,
      editorHeight,
      editorCenterX,
      editorCenterY,
      offsetX,
      offsetY,
      scale,
      visibleBlocks,
      selectedBlockId,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseWheel,
      saveToFile,
      openFile,
      onFileSelected,
      onBlockSelected,
      onBlockUpdate,
      fontSize,
      gridGap,
      gridCountX,
      gridCountY,
    };
  },
});
</script>

<style scoped lang="scss">
.editor-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.editor-content {
  position: absolute;
  top: 0;
  left: 0;
}

.grid-line-vertical {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #eee;
  z-index: 0;
}

.grid-line-horizontal {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: #eee;
  z-index: 0;
}
</style>
