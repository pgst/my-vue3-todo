<script setup>
const props = defineProps({ color: String })
const emit = defineEmits({ 'on-click': null })

const handleClick = () => {
  emit('on-click')
}
</script>

<template>
  <button class="btn" :class="props.color" @click="handleClick"><slot /></button>
</template>

<style scoped>
.btn {
  padding: 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  /* background-color: #03a9f4; */
  border-radius: 6px;
}

.bule {
  background-color: #03a9f4;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}
</style>
