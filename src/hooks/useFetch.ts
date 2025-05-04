import { useEffect, useState, useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface FetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: () => void;
}

export function useFetch<T = unknown>(
  url: string,
  config?: AxiosRequestConfig
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [trigger, setTrigger] = useState<number>(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<T>(url, config);
      setData(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [url, config]);

  useEffect(() => {
    fetchData();
  }, [fetchData, trigger]);

  const refetch = () => setTrigger((prev) => prev + 1);

  return { data, error, loading, refetch };
}
