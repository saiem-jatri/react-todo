// fakeAuthAPI.ts
export const loginWithEmail = (email: string, password: string): Promise<{ token: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ token: 'dummy-token' });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000); // simulate network delay
  });
};
