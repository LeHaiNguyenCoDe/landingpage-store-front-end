<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Email:</label>
      <input type="user" v-model="user" required />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="password" required />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = ref('');
const password = ref('');
const router = useRouter();

const submitForm = () => {
  const userData = { email: user.value, password: password.value, token: 'fake-token' };
  emit('login', userData);
  router.push('/dashboard');
};
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: 'login', userData: { email: string; password: string; token: string }): void;
}>();
</script>
