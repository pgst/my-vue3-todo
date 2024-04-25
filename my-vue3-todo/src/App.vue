<!-- ロジック（JavaScriptを書くところ） -->
<script setup>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBlog = () => {
  router.push('/blog')
}
</script>

<!-- テンプレート（HTMLを書くところ） -->
<template>
  <div class="wrap">
    <TheHeader>ヘッダー</TheHeader>
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <span @click="goBlog">Blog</span>
    </nav>
    <main class="main"><router-view /></main>
    <TheFooter>フッター</TheFooter>
  </div>
</template>

<!-- スタイル（CSSを書くところ） -->
<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
}

.main {
  flex: 1;
  padding: 16px;
}
</style>
