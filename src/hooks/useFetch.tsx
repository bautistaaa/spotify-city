import { useEffect, useState } from 'react';
import getToken from '../utils/getToken';
import getAuthHeader from '../utils/getAuthHeader';

interface FetchResponse<T> {
  response?: T;
  error?: string;
}
const useFetch = <T extends unknown>(
  url: string,
  options: RequestInit = {}
): FetchResponse<T> => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const headers: HeadersInit = {
          ...(token ? getAuthHeader(token) : {}),
        };
        const res = await fetch(url, { ...options, headers });
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error };
};

export default useFetch;
