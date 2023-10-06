import React from "react";
import styles from "./character.module.scss";
import classNames from "classnames";

export const Character = (props: Props) => {
  const { character } = props;
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img alt="" className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <span className={styles.chracterName}></span>
          <div className={styles.status}>
            <span
              className={classNames(
                styles.dot,
                character?.status === "Dead" && styles.redDot
              )}
            ></span>
          </div>
        </div>
        <div className={styles.text}>
          <span>Last Known Location</span>
          <span></span>
        </div>
        <div className={styles.text}>
          <span>First Seen</span>
          <span></span>
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
