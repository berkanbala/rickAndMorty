import styles from "./home.module.scss";
import { useGetChracters } from "../../common/hooks/useGetChracters";
import { Character } from "../../custom/components/character/character";
export const Home = () => {
  const { characters, charactersError, charactersLoading } = useGetChracters();

  if (charactersLoading) return <div>loading...</div>;
  if (charactersError) return <div>error</div>;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {characters?.results?.map((character: any) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
