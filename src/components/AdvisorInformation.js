import React, { useState } from "react";
import styles from "./AdvisorInformation.module.css";
import { useQuery } from "@apollo/client";
import user_image from "../images/user.png";
import autonation_logo from "../images/autonation_logo.png";
// import { GET_ADVISOR } from "../helpers/queries";
import { GET_ADVISOR } from "../helpers/queries";
import { Skeleton, Alert, Spin } from "antd";
import "antd/dist/antd.css";

export default function AdvisorInformation() {
  const [available, setAvailable] = useState(false);
  const {
    data: advisor,
    loading: advisorLoading,
    error: advisorError,
  } = useQuery(GET_ADVISOR, {
    variables: {
      email: "douglasadams@autonation.com",
    },
  });

  if (advisorLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper_top}>
          <div className={styles.user_information}>
            <img src={user_image} alt="user" />
            <div className={styles.centered_info}>
              <Spin active size={"large"} spinning />
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

  if (advisorError) {
    return (
      <Alert
        message="Please check application again"
        description="Error Description "
        type="error"
        closable
      />
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_top}>
        <div className={styles.user_information}>
          <img src={user_image} alt="user" />
          <div className={styles.information}>
            <h1>{`${advisor.getAdvisor.firstName} ${advisor.getAdvisor.lastName}`}</h1>
            <div className={styles.available}>
              <h3>{advisor.getAdvisor.email}</h3>
              {/* <label>
                <input
                  name="available"
                  type="checkbox"
                  checked={available}
                  onChange={() => setAvailable(!available)}
                />
              </label> */}
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
