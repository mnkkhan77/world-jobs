import { useState, useCallback } from 'react';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

interface UseApiOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useApi<T>(apiFunc: (...args: any[]) => Promise<T>, options: UseApiOptions = {}) {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const execute = useCallback(
    async (...args: any[]) => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const data = await apiFunc(...args);
        setState({ data, loading: false, error: null });
        options.onSuccess?.(data);
        return data;
      } catch (error) {
        const err = error instanceof Error ? error : new Error('An error occurred');
        setState({ data: null, loading: false, error: err });
        options.onError?.(err);
        throw err;
      }
    },
    [apiFunc, options]
  );

  return { ...state, execute };
}