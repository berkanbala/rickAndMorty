import useSWR from "swr";
import { apiClient } from "../clients/appClients";

export const useGetChracters = (): {
  characters: any;
  charactersLoading: boolean;
  charactersError: any;
  currentPage: any;
} => {
  const rickAndMortyApiClient = apiClient({});

  const fetcher = (url: string) =>
    rickAndMortyApiClient.get(url).then((res) => res.data);
  const shouldFetch = !!rickAndMortyApiClient;

  const url = shouldFetch ? "https://rickandmortyapi.com/api/character" : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    characters: data || null,
    charactersLoading: isValidating,
    charactersError: error,
    currentPage: null,
  };
};
