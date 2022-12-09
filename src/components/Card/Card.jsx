import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={props.onClose}>X</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.h2Name}>{props.name}</h2>
      </Link>
      <img className={styles.img} src={props.image} alt={props.name} />
      <div className={styles.txtContainer}>
        <div>
          <h3>{props.species}</h3>
        </div>
        <div>
          <h3>{props.gender}</h3>
        </div>
      </div>
    </div>
  );
}
