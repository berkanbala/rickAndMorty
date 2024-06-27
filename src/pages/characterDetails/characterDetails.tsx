import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ICharacters } from "common/models/characters";
import styles from "./characterDetails.module.scss";

export const CharacterDetails = () => {
  const { id } = useParams();

  const [characterDetails, setCharacterDetails] = useState<ICharacters>(
    {} as ICharacters
  );

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacterDetails(data))
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={characterDetails?.image} alt="characterimage" />
      </div>

      <div className={styles.detail}>
        <div className={styles.name}>
          <span>{characterDetails?.name}</span>
          <span className={styles.span}>
            {characterDetails?.status} - {characterDetails?.species}
          </span>
        </div>

        <div className={styles.property}>
          <div className={styles.propertyDetails}></div>
          <div className={styles.propertyDetails}>
            <span className={styles.title}>LOCATION</span>
            <span>{characterDetails?.location?.name} </span>
          </div>
          <div className={styles.propertyDetails}>
            <span className={styles.title}>ORIGIN</span>
            <span>{characterDetails?.origin?.name} </span>
          </div>
          <div className={styles.propertyDetails}>
            <span className={styles.title}>Gender</span>
            <span>{characterDetails?.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
