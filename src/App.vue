<template>
  <div class="app-container">
    <EditorComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditorComponent from "./components/EditorComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    EditorComponent,
  },
});
</script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
