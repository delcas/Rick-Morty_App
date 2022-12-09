import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards(props) {
  const { characters,onClose } = props;
  return (
    <div
      className={styles.container}
    >
      {characters.map((element) => (
        <Card
          key={element.name}
          name={element.name}
          species={element.species}
          gender={element.gender}
          image={element.image}
          onClose={()=>onClose(element.id)}
          id={element.id}
        />
      ))}
    </div>
  );
}
