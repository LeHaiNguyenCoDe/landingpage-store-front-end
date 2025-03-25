<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Email:</label>
      <input type="email" v-model="email" required />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="password" required />
    </div>
    <button type="submit">Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const submitForm = () => {
  alert('User registered: ' + email.value);
};
</script>
