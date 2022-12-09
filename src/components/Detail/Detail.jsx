import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container2}>
      <div className={styles.container}>
        <button className={styles.buttonContainer} onClick={handleClick}>
          Back to Home
        </button>
        {character ? (
          <div>
            <div >
              <h1 className={styles.h2Name}>Name: {character.name}</h1>
              <h2 className={styles.h2}>Estate: {character.status}</h2>
              <h2 className={styles.h2}>Gender: {character.gender}</h2>
              <h2 className={styles.h2}>Origin: {character.origin?.name}</h2>
            </div>

            <img
              className={styles.img}
              src={character.image}
              alt={character.name}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
