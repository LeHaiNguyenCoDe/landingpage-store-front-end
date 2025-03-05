<template>
  <!-- Nó sẽ chứa các components HeroNav MenuNav OrderNav-->
    <section class="space-y-3vw">
      <PromoBanner />
      <PromoServiceBenefits />
      <ProductList />
    </section>
</template>

<script lang="ts" setup>
import PromoBanner from '@/modules/home_page/components/bannerSection/PromoBanner.vue';
import PromoServiceBenefits from '@/modules/home_page/components/bannerSection/PromoServiceBenefits.vue';
import ProductList from '@/modules/home_page/components//productSection/ProductList.vue';
</script>

<style lang="scss" scoped>

</style>
