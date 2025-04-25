import { useState } from "react";

type FetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
    fetchData: (body: any) => Promise<void>;
};

export function useFetchLogin<T = any>(url: string, options?: RequestInit): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    async function fetchData(body: any) {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(options?.headers || {}),

                },
                body: JSON.stringify(body),
                credentials: "include",
                ...options,
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || `Error: ${res.status}`);
            }

            const json = await res.json();
            setData(json);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, fetchData };
}
