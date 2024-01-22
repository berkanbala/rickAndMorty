import styles from "./character.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router";

export const Character = (props: Props) => {
  const navigate = useNavigate();
  const { character } = props;

  const handleClick = (id: number) => navigate(`details/${id}`);

  return (
    <div
      className={styles.container}
      onClick={() => handleClick(character?.id)}
    >
      <div className={styles.image}>
        <img
          src={character?.image}
          alt="chracterImage"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <span className={styles.chracterName}>{character?.name}</span>
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
          <span>Location</span>
          <span>{character?.location?.name}</span>
        </div>
        <div className={styles.text}>
          <span>Origin </span>
          <span>{character?.origin?.name}</span>
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
    origin: { name: string; url: string };
  };
}
