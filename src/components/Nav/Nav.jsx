import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav(props) {
  const {logout}=props
  const handleSubmit=()=>{
    logout()
  }
  return (
    <nav>
      <div className={styles.container}>
        <div>
          <Link to="/home">
            <img
              className={styles.logo}
              src="https://cutewallpaper.org/21/rick-and-morty-silhouette/Rick-And-Morty-Rick-And-Morty-Rick-And-Morty-Rick-And-Morty-Decal.jpg"
              alt="LOGO"
            />
            <p className={styles.title}>RICK AND MORTY APP</p>
          </Link>
        </div>
        <ul className={styles.link}>
          <Link className={styles.h2Name} to="/about">About</Link>
          <Link className={styles.h2Name} to="/home">Home</Link>
          <button onClick={handleSubmit} className={styles.button}>Logout</button>
          <div className={styles.search}>
            <SearchBar onSearch={props.onSearch} />
          </div>
        </ul>
      </div>
    </nav>
  );
}
