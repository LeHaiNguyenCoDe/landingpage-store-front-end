<template>
  <section class="space-y-3vw">
    <header>
      <HeaderLayout />
    </header>

    <main>
      <!-- <router-view /> -->
      <HomePage />
    </main>

    <footer>
      <FooterLayout />
    </footer>
  </section>
</template>

<script lang="ts" setup>
import FooterLayout from '@/layouts/FooterLayout.vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import HomePage from '@/modules/home_page/views/HomePage.vue';
</script>
