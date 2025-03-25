export const fakeAuthApi = async (userData: { username: string; password: string }) => {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (userData.username === 'admin' && userData.password === '123456') {
        resolve({ token: 'fake-token-123' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
