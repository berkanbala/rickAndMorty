export interface ICharacters {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  episode: string[];
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}
