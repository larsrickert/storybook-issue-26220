<script lang="ts" setup>
const props = defineProps<{
  /**
   * Button label.
   */
  label: string;
}>();

const emit = defineEmits<{
  /**
   * Emitted when the button is clicked.
   */
  click: [];
}>();
</script>

<template>
  <button class="button" @click="emit('click')">{{ props.label }}</button>
</template>

<style scoped>
.button {
  cursor: pointer;
}
</style>
