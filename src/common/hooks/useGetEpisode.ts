import useSWR from "swr";
import { apiClient } from "common/clients/appClients";

export const useGetEpisode = (endpoint: string) => {
  const rickAndMortyApiClient = apiClient({});

  const fetcher = (url: string) =>
    rickAndMortyApiClient.get(url).then((res) => res.data);

  const shouldFetch = !!rickAndMortyApiClient;

  const url = shouldFetch ? endpoint : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    episode: data || null,
    episodeLoading: isValidating,
    episodeError: error,
  };
};
