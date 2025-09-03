import api from "./api-interceptor";
import { setToken, clearToken } from "../utils/auth";

const authService = {
  async login(email: string, password: string) {
    const res = await api.post("/login", { email, password });
    // handle sesuai response backend
    if (res.data?.code === "00") {
      // const token = res.data.data?.[0]?.acces_token;
      // if (token) {
      //   localStorage.setItem("token", token);
      // }
      return res.data;
    } else {
      throw new Error(res.data?.message || "Login gagal");
    }
  },

  async logout() {
    const res = await api.post("/logout");
    if (res.data?.code === "00") {
      // localStorage.removeItem("token");
      return res.data;
    } else {
      throw new Error(res.data?.message || "Logout gagal");
    }
  },

  async register(fullName: string, email: string, phoneNumber: string, password: string, passwordConfirmation: string) {
    const res = await api.post("/register", {fullName, email, phoneNumber, password, passwordConfirmation });
    if (res.data?.code === "00") {
      return res.data;
    } else {
      throw new Error(res.data?.message || "Register gagal");
    }
  },
};

export default authService;
