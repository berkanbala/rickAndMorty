import styles from "./characterDetails.module.scss";
import { useParams } from "react-router-dom";
import { useGetCharacterDetails } from "../../common/hooks/useGetCharacterDetails";
import { useGetEpisode } from "../../common/hooks/useGetEpisode";
import classNames from "classnames";
export const CharacterDetails = () => {
  const { id } = useParams();

  const { characterDetails, characterDetailsLoading, characterDetailsError } =
    useGetCharacterDetails(id ?? "");

  const { episode, episodeError, episodeLoading } = useGetEpisode(
    characterDetails?.episode[0]
  );

  if (characterDetailsLoading) return <div>failed to load</div>;
  if (characterDetailsError) return <div>loading...</div>;

  if (episodeLoading) return <div>loading...</div>;
  if (episodeError) return <div>failed to load</div>;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{characterDetails?.name}</div>
      <div className={styles.content}>
        <img className={styles.image} src={characterDetails?.image} alt="" />
        <div className={styles.grad}>
          <div className={styles.status}>
            <span
              className={classNames(
                styles.dot,
                characterDetails?.status === "Dead" && styles.redDot
              )}
            ></span>
            {characterDetails?.status} - {characterDetails?.species}
          </div>

          <div className={styles.text}>
            <span>Last Known Location</span>
            <span>{characterDetails?.location?.name}</span>
          </div>

          <div className={styles.text}>
            <span>First Seen </span>
            <span>{episode?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
