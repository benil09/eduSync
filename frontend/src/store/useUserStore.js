import axios from "axios";
import { toast } from "react-hot-toast";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async (
    email,
    username,
    firstName,
    lastName,
    password,
    confirmPassword,
    year,
    branch,
    role
  ) => {
    set({ loading: true });
    if (password !== confirmPassword) {
      set({ loading: false });
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/auth/signup", {
        email,
        username,
        firstName,
        lastName,
        password,
        year,
        branch,
        role,
      });
      set({ user: response.data.user, loading: false });
      toast.success("Signup successful");
    } catch (error) {
      set({ loading: false });
      console.log("Error in signup store : ", error);
      toast.error(error?.response?.data?.message || "Signup failed");
    }
  },
  login: async (email, password) => {
    set({ loading: true });
    try {
      const response = await axios.post("/auth/login", { email, password });
      set({ user: response.data.user, loading: false });
      toast.success("Logged in successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error?.response?.data?.message || "Login failed");
    }
  },
  logout: async () => {
    set({ loading: true });
    try {
      await axios.post("/auth/logout");
      set({ user: null, loading: false });
      toast.success("Logged out successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  },
}));
