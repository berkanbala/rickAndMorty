import axios from "axios";

export const getCharactersFromApi = async () => {
  const response = await axios("/");
};

export const getCharactersDetailsFromApi = async (id: number) => {
  // const response = await fetch(`${baseUrl}/${id}`);
  // const data = await response.json();
  // console.log(data);
  // return data;
};
