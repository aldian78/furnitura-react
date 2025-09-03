// utils/auth.ts
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  name: string;
  email: string;
  exp: number; // waktu expired (epoch seconds)
  iat: number; // waktu issued
};

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const clearToken = () => {
  localStorage.removeItem("token");
};

// 🔑 fungsi baru untuk cek token expired
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.exp * 1000 < Date.now(); // exp dikali 1000 -> ms
  } catch (e) {
    return true; // kalau gagal decode, anggap expired
  }
};

export const isLoggedIn = () => {
  const token = getToken();
  if (!token) return false;

  if (isTokenExpired(token)) {
    clearToken();
    return false;
  }
  return true;
};

export const getUserFromToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token);
  } catch (e) {
    return null;
  }
};
