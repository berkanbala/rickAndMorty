import styles from "./home.module.scss";
import { Character } from "../../custom/components/character/character";
import { ICharacters } from "common/models/characters";
import { useEffect, useState } from "react";
import { Loading } from "common/components/ui/loading/loading";
export const Home = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {characters?.map((character: ICharacters) => (
          <Character
            key={character.id}
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            location={character.location}
            origin={character.origin}
            episode={character.episode}
          />
        ))}
      </div>
    </div>
  );
};
