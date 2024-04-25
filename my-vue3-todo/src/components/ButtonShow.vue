<script setup>
import BaseButton from '@/components/BaseButton.vue'

const emit = defineEmits('show-click')
</script>

<template>
  <BaseButton class="green" @on-click="emit('show-click')">編</BaseButton>
</template>
