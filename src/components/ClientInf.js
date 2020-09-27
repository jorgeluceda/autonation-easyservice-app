import React from "react";
import { GET_USER, REMOVE_PARKED_USER } from "../helpers/queries";
import { useQuery, useMutation } from "@apollo/client";

import styles from "./ClientInf.module.css";

export default function ClientInf({ plate }) {
  const {
    data: data,
    loading: parkedUserLoading,
    error: parkedUserError,
    refetch,
  } = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
    variables: {
      licensePlate: plate,
    },
  });

  const [removeParkedUser] = useMutation(REMOVE_PARKED_USER);

  if (parkedUserLoading) {
    return <></>;
  }

  if (parkedUserError) {
    return <></>;
  }

  if (data.getUser === null) {
    return <></>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>{`${data.getUser.first_name} ${data.getUser.last_name}`}</h3>
        <span>
          <strong>License Plate:</strong>
          {plate}
        </span>
        <div
          className={styles.attend_button}
          onClick={() => {
            removeParkedUser({ variables: { license: plate } });
          }}
        >
          Attend Now
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.right}>
        <h4>Recent History</h4>
        {data.getUser.service_history.map((history) => {
          return <div>{history}</div>;
        })}
      </div>
    </div>
  );
}
