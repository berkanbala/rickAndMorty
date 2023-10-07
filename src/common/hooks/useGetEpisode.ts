import useSWR from "swr";
import { apiClient } from "../clients/appClients";

export const useGetEpisode = (
  endpoint: string
): {
  episode: any;
  episodeLoading: boolean;
  episodeError: any;
} => {
  const rickAndMortyApiClient = apiClient({});

  const fetcher = (url: string) =>
    rickAndMortyApiClient.get(url).then((response) => response.data);
  const shouldFetch = !!rickAndMortyApiClient;

  const url = shouldFetch ? endpoint : null;

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(data);

  return {
    episode: data || null,
    episodeLoading: isValidating,
    episodeError: error,
  };
};
