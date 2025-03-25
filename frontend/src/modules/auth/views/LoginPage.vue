<template>
  <div class="login-container">
    <h2>Login</h2>
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue';
import { useAuthStore } from '@/modules/auth';
import { fakeAuthApi } from '@/services/authService';
interface User {
  username: string;
  password: string;
  token: string;
}

const authStore = useAuthStore();

const handleLogin = async (userData: { username: string; password: string }) => {
  try {
    const response = await fakeAuthApi(userData);

    const userWithToken: User = {
      username: userData.username,
      password: userData.password,
      token: String(response.token)
    };

    await authStore.login(userWithToken as User);
    console.log('Login successful');
  } catch (error) {
    console.error('Login failed', error);
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
