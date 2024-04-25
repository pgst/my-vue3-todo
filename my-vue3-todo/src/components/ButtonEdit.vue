<script setup>
import BaseButton from '@/components/BaseButton.vue'

const emit = defineEmits('edit-click')
</script>

<template>
  <BaseButton class="green" @on-click="emit('edit-click')">変更</BaseButton>
</template>
