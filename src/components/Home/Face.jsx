import styles from "./Face.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Face = () => {
  const [changingText, setChangingText] = useState("Voyage of Discovery");

  useEffect(() => {
    const textArray = [
      "Voyage of Discovery",
      "Explore the Unknown",
      "Venture into the Wild",
      "Journey to New Horizons",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      setChangingText(textArray[currentIndex]);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.face}>
        <img
          src={require("../../assets/images/intro.jpg")}
          alt="travel"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.backdrop}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <span className="material-symbols-outlined" style = {{color: "white", fontSize: "3rem"}}>flight_takeoff</span>
            <h3 className={styles.bold} style = {{fontSize: "1.5rem", marginLeft: "1rem"}}>Aljo Tourism</h3>
          </div>

          <div className={styles.options}>
            <p className={styles.link}>Register</p>
            <p className={styles.link}><Link to = './login' style = {{textDecoration: "none", color: "white"}}>Login</Link></p>
          </div>
        </div>

        <h1 className={styles.bold} style={{ animation: "changeText 12s infinite" }}>
          {changingText}
        </h1>

        <h1 className={styles.normal}>Pioneering Adventures Around the Globe</h1>
      </div>
    </>
  );
};

export { Face };
