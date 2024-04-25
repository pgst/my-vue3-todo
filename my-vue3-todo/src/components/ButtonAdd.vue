<script setup>
import BaseButton from '@/components/BaseButton.vue'

const emit = defineEmits('add-click')
</script>

<template>
  <BaseButton class="blue" @on-click="emit('add-click')">追加</BaseButton>
</template>
