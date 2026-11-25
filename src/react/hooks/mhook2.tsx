import { useEffect, useState } from 'react';

export function useUser(userId: string) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(null);

    const controller = new AbortController();

    fetch(`/api/users/${userId}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`${res.status}`);
      })
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [userId]);

  return { user, loading, error };
}
