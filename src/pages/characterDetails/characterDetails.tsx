import { useParams } from "react-router";
import { useGetCharacterDetails } from "common/hooks/useGetCharacterDetails";
import styles from "./characterDetails.module.scss";
import classNames from "classnames";
import { Loading } from "common/components/ui/loading/loading";

export const CharacterDetails = () => {
  const { id } = useParams();

  const { characterDetails, characterDetailsLoading, characterDetailsError } =
    useGetCharacterDetails(id!);

  if (characterDetailsError) return <Loading />;
  if (characterDetailsLoading) return <div>failed to load</div>;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{characterDetails?.name}</div>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={characterDetails?.image}
          alt="character img"
        />
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
            <span>Gender </span>
            <span>{characterDetails?.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
