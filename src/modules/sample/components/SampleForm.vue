<template>
  <form @submit.prevent="submitForm">
    <button type="submit"></button>
  </form>
</template>

<script setup lang="ts">
const submitForm = () => {
  console.log('Form submitted');
}
</script>
