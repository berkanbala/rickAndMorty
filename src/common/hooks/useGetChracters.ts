import useSWR from "swr";
import { apiClient } from "common/clients/appClients";

export const useGetChracters = () => {
  const rickAndMortyApiClient = apiClient({});

  const fetcher = (url: string) =>
    rickAndMortyApiClient.get(url).then((res) => res.data);

  const shouldFetch = !!rickAndMortyApiClient;

  // const url = shouldFetch ? "https://rickandmortyapi.com/api/character" : null;
  const url = shouldFetch ? "/" : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    characters: data || null,
    charactersLoading: isValidating,
    charactersError: error,
  };
};
