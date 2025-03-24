import { defineStore } from 'pinia';

interface User {
  username: string;
  password: string;
  token?: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  actions: {
    login(userData: User) {
      this.user = userData;
      this.token = userData.token || 'fake-token';
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
});
