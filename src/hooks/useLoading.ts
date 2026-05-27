import { useCallback, useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const withLoading = useCallback(
    async <ReturnType>(cb: () => Promise<ReturnType>): Promise<ReturnType> => {
      setIsLoading(true);
      try {
        const res = await cb();
        return res;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, withLoading };
};
