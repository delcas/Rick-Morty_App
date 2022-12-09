import { useState } from "react";
import styles from "./Search.module.css";

export default function SearchBar(props) {

  const [id, setId] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const { onSearch } = props;
  return (
    <div className={styles.div}>
      <input placeholder="insert Id" className={styles.input} type="search" onChange={handleChange} />
      <button  className={styles.button} onClick={() => onSearch(id)}>
        ADD
      </button>
    </div>
  );
}
