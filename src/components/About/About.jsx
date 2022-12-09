import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container2}>
      <div className={styles.container}>
        <h2 className={styles.h2Name}>About... Acerca de...</h2>
        <p className={styles.p}>
        This App was created by Gabriel Del Castillo. <br />
         App developed for the Integration project of the Henry course (full stack developer), in Module 2 (front end - react).
        </p>
        <p className={styles.p}>
          Esta App fue creada por Gabriel Del Castillo.
          <br />
          App desarrollada para el proyecto Integration del curso Henry (full
          stack developer), en el Modulo 2 (front end - react).
        </p>
      </div>
    </div>
  );
}
