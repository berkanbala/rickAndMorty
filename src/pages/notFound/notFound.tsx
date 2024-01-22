import styles from "./notFound.module.scss";
import RAM from "../../common/media/images/r1.png";

export function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 Page Not Found</h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <img alt="rickandmorty" src={RAM} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
