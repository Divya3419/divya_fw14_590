import React from "react";
import styles from "./Amacard.module.css";
const Amacard = (props) => {
  return (
    <div className={styles.card} style={{ backgroundColor: `${props.color}` }}>
      <div className={styles.left}>
        <h2>{props.date}</h2>
        <p className={styles.diff}>{props.heading}</p>
        <h1>{props.subheading}</h1>
        <h2>{props.devices}</h2>
      </div>

      <div className={styles.right}>
        <div className={styles.fir}>
          <img src={props.logo} alt="" />
        </div>
        <div className={styles.sec}>
          <img src={props.arrow} />
        </div>
      </div>
    </div>
  );
};
export default Amacard;
