import React, { useState } from "react";
import styles from "./Form.module.css";
import { validation } from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const {login}=props

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
    setErrors(validation({...userData,
      [e.target.name]: e.target.value }))
  }

  const handleSubmit=()=>{
    login(userData)
  }

  console.log(errors.username);
  return (
    <div className={styles.container2}>
      <div className={styles.container}>
        <p className={styles.h2Name}>
          WELCOME TO RICK AND MORTY APP <br />
          PLEASE LOGIN
        </p>
        <img
          className={styles.img}
          src="https://media.tenor.com/62lfdCxfIjkAAAAi/dancing-happy.gif"
          alt="Rick & Morty"
        />

        <div className={styles.form}>
          <label className={styles.label}>Username: </label>
          <input
            id="usernamer"
            name="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <p className={styles.error}>{errors.username}</p>

        <div className={styles.form}>
          <label className={styles.label}>Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <p className={styles.error}>{errors.password}</p>

        <button onClick={handleSubmit} className={styles.button}>Login</button>
      </div>
    </div>
  );
}
