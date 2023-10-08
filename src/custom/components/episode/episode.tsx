import styles from "./episode.module.scss";

export const Episode = (props: Props) => {
  const { character } = props;

  return (
    <div className={styles.text}>
      <span>First Seen</span>
      <span>{character?.episode?.name} </span>
    </div>
  );
};

interface Props {
  character: {
    episode: { [name: string]: [] };
  };
}
