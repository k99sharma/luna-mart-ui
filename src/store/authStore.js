import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// auth store
const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      role: null,

      // actions
      login: (user, role, token) =>
        set({ isAuthenticated: true, user, token, role }),
      logout: () =>
        set({ isAuthenticated: false, user: null, token: null, role: null }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
