<script setup>
import BaseButton from '@/components/BaseButton.vue'

const emit = defineEmits('del-click')
</script>

<template>
  <BaseButton class="pink" @on-click="emit('del-click')">削</BaseButton>
</template>
