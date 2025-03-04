<template>
  <div>
    <header>
      <HeaderLayout />
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <FooterLayout />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import FooterLayout from '@/layouts/FooterLayout.vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
</script>
