import React, { useState } from "react";
import styles from "./AdvisorInformation.module.css";

import user_image from "../images/user.png";
import autonation_logo from "../images/autonation_logo.png";

export default function AdvisorInformation() {
  const [available, setAvailable] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_top}>
        <div className={styles.user_information}>
          <img src={user_image} alt="user" />
          <div className={styles.information}>
            <h1>Advisor Name</h1>
            <div className={styles.available}>
              <h3>Available?</h3>
              <label>
                <input
                  name="available"
                  type="checkbox"
                  checked={available}
                  onChange={() => setAvailable(!available)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.logo_image}>
          <img src={autonation_logo} alt="autonation logo" />
        </div>
      </div>
      <div className={styles.wrapper_bottom}>
        <h5>Arriving Clients</h5>
      </div>
    </div>
  );
}
