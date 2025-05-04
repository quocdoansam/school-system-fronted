import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import { useState } from "react";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { refetchUser } = useAuth();

  const login = async (id: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.post(
        "http://localhost:9000/api/auth/token",
        { id: id, password: password },
        { withCredentials: true }
      );
      await refetchUser();
      return true;
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Login failed.");
      } else {
        setError("Unknown Error");
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};

export default useLogin;
