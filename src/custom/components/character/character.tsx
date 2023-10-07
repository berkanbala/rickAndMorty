import { useNavigate } from "react-router-dom";
import styles from "./character.module.scss";
import classNames from "classnames";
import { useGetEpisode } from "../../../common/hooks/useGetEpisode";

export const Character = (props: Props) => {
  const navigate = useNavigate();
  const { character } = props;

  const handleClick = (id: number) => navigate(`details/${id}`);

  const { episode, episodeError, episodeLoading } = useGetEpisode(
    character?.episode[0]
  );

  if (episodeLoading) return <div>loading...</div>;
  if (episodeError) return <div>failed to load</div>;

  return (
    <div
      className={styles.container}
      onClick={() => handleClick(character?.id)}
    >
      <div className={styles.image}>
        <img alt="" className={styles.image} src={character?.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <span className={styles.chracterName}>{character?.name} </span>
          <div className={styles.status}>
            <span
              className={classNames(
                styles.dot,
                character?.status === "Dead" && styles.redDot
              )}
            ></span>
            {character?.status} - {character?.species}
          </div>
        </div>
        <div className={styles.text}>
          <span>Last Known Location</span>
          <span>{character?.location?.name} </span>
        </div>
        <div className={styles.text}>
          <span>First Seen</span>
          <span>{episode?.name} </span>
        </div>
      </div>
    </div>
  );
};

interface Props {
  character: {
    name: string;
    status: string;
    species: string;
    image: string;
    id: number;
    location: { name: string; url: string };
    episode: string[];
  };
}
