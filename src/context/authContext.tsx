import { createContext, useContext, useEffect, useState } from "react";
import { getToken, setToken as saveToken, clearToken, isLoggedIn, getUserFromToken } from "../utils/auth";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  user: { name: string; email: string } | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(getToken());
  const [user, setUser] = useState<{ name: string; email: string } | null>(getUserFromToken());

  const setToken = (newToken: string | null) => {
    if (newToken) {
      saveToken(newToken);
      setUser(getUserFromToken());
    } else {
      clearToken();
      setUser(null);
    }
    setTokenState(newToken);
  };

  const logout = () => {
    clearToken();
    setTokenState(null);
    setUser(null);
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      setTokenState(null);
      setUser(null);
    } else {
      setUser(getUserFromToken());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
