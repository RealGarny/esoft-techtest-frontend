import { create } from 'zustand';
import ApiClient from '../services/api/apiClient';
import { User } from '../types/entities/User';

interface UserState {
  user: User | null;
  subordinates: User[] | null;
  login: (user: User) => void;
  logout: () => void;
  getSubordinates: () => Promise<User[]>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  subordinates: null,

  login: (user) => {
    set({ user });
  },

  async getSubordinates() {
    if (!this.user) return [];
    if (this.subordinates) return this.subordinates;
    const res = await ApiClient.user.getSubordinates();
    if (!res) return [];
    const subordinates = res.subordinates;
    set({ subordinates });
    return subordinates;
  },

  logout: () => {
    set({ user: null });
  },
}));
