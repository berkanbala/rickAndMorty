export interface ICharacters {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }[];
  results: {
    id: number;
    name: string;
    type: string;
    image: string;
    status: string;
    species: string;
    location: {
      name: string;
      url: string;
      episode: {
        name: string;
        url: string;
      };
    };
  }[];
}
