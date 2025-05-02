import { AuthContextType } from "@/types/auth-context";
import { User } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Role } from "@/types/role";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMe = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/me", { withCredentials: true });
      setUser(res.data.data);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  const logout = async () => {
    await axios.post("http://localhost:9000/api/auth/logout", {}, { withCredentials: true });
    setUser(null);
  }

  const hasRole = (role: Role | Role[]) => {
    if (!user) return false;
    return Array.isArray(role) ? role.includes(user.role) : user.role === role;
  }

  useEffect(() => {
    getMe();
  }, []);

  return <AuthContext.Provider
    value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      hasRole,
      logout,
      refetchUser: getMe,
    }}
  >
    {children}
  </AuthContext.Provider>
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider.");
  return ctx;
}

