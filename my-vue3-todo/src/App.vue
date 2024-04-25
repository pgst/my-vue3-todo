<!-- ロジック（JavaScriptを書くところ） -->
<script setup>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<!-- テンプレート（HTMLを書くところ） -->
<template>
  <div class="wrap">
    <TheHeader />
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link>
    </nav>
    <main class="main"><router-view /></main>
    <TheFooter />
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
