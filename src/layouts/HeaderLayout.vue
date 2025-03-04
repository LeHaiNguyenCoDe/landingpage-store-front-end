<template>
  <!-- Nó sẽ chứa các components HeroNav MenuNav OrderNav-->
    <section class="space-y-3vw">
      <PromoBanner />
      <PromoServiceBenefits />
      <ProductList />
    </section>
</template>

<script lang="ts" setup>
import PromoBanner from '@/components/bannerSection/PromoBanner.vue';
import PromoServiceBenefits from '@/components/bannerSection/PromoServiceBenefits.vue';
import ProductList from '@/components/productSection/ProductList.vue';
</script>

<style lang="scss" scoped>

</style>
