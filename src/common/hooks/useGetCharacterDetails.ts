import useSWR from "swr";
import { apiClient } from "common/clients/appClients";

export const useGetCharacterDetails = (id: string) => {
  const rickAndMortyApiClient = apiClient({});

  const fetcher = (url: string) =>
    rickAndMortyApiClient.get(url).then((res) => res.data);

  const shouldFetch = !!rickAndMortyApiClient;

  const url = shouldFetch
    ? // ? `https://rickandmortyapi.com/api/character/${id}`
      `/${id}`
    : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    characterDetails: data || null,
    characterDetailsLoading: isValidating,
    characterDetailsError: error,
  };
};
