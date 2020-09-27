import React from "react";

import styles from "./ClientInf.module.css";

export default function ClientInf({ name, plate, history }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>{name}</h3>
        <span>
          <stron>License Plate:</stron>
          {plate}
        </span>
        <div className={styles.attend_button}>Attend Now </div>
      </div>
      <div className={styles.line} />
      <div className={styles.right}>
        <h4>Recent History</h4>
        <span>{history}</span>
      </div>
    </div>
  );
}
