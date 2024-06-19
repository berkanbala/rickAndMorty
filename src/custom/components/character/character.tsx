import styles from "./character.module.scss";
import { useNavigate } from "react-router";

export const Character = (props: Props) => {
  const { id, image, name, species, status, episode } = props;
  const navigate = useNavigate();

  const handleClick = (id: number) => navigate(`details/${id}`);

  return (
    <div className={styles.container} onClick={() => handleClick(id)}>
      <div className={styles.image}>
        <img src={image} alt="chracterImage" className={styles.image} />
      </div>

      <div className={styles.detail}>
        <div className={styles.name}>
          <span>{name}</span>
        </div>
        <div className={styles.property}>
          <div className={styles.propertyDetails}>
            <span className={styles.title}>STATUS</span>
            <span>{status}</span>
          </div>
          <div className={styles.propertyDetails}>
            <span className={styles.title}>SPECIES</span>
            <span>{species}</span>
          </div>
          <div className={styles.propertyDetails}>
            <span className={styles.title}>EPISODE</span>
            <span>{episode.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  name: string;
  status: string;
  species: string;
  image: string;
  id: number;
  episode: string[];
  location: { name: string };
  origin: { name: string };
}
