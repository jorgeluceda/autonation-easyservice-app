import React from "react";
import { List, message, Avatar, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import styles from "./ArrivingClients.module.css";
import ClientInf from "./ClientInf";

export default function ArrivingClients() {
  return (
    <div className={styles.wrapper}>
      <InfiniteScroll
        pageStart={0}
        // loadMore={handleInfiniteOnLoad }
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
      >
        <ClientInf
          name={"Damian Marley"}
          plate={"KGZ-A53"}
          history={"Traded a Subaru for a FerrariPerformed Engine Replacement"}
        />
        <ClientInf
          name={"Tim Cook"}
          plate={"AFW-G53"}
          history={
            "Traded a Corolla for a PorscheRequested a Refund for his Corolla"
          }
        />
        <ClientInf
          name={"Percy Jackson"}
          plate={"AFW-G53"}
          history={"Is pro"}
        />
      </InfiniteScroll>
    </div>
  );
}
