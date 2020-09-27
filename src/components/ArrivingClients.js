import React from "react";
import { List, message, Avatar, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { PARKED_USERS } from "../helpers/queries";
import { useQuery } from "@apollo/client";
import styles from "./ArrivingClients.module.css";
import ClientInf from "./ClientInf";
import { Skeleton } from "antd";
export default function ArrivingClients() {
  const {
    data: data,
    loading: parkedUsersLoading,
    error: parkedUsersError,
  } = useQuery(PARKED_USERS, {
    fetchPolicy: "cache-and-network",
    pollInterval: 1500,
  });

  if (parkedUsersLoading) {
    return <></>;
  }

  if (parkedUsersError) {
    return <div>Error</div>;
  }

  let parkedUsersDivs = [];
  for (let i = 0; i < data.parkedUsers.length; i++) {
    parkedUsersDivs.push(<ClientInf plate={data.parkedUsers[i]} />);
  }

  console.log(parkedUsersDivs);
  return (
    <div className={styles.wrapper}>
      <InfiniteScroll
        pageStart={0}
        // loadMore={handleInfiniteOnLoad }
        hasMore={true}
        // loader={<Spin>Waiting for Clients to Arrive ...</Spin>}
        useWindow={false}
      >
        {parkedUsersDivs}
        {parkedUsersDivs.length === 0 && (
          <div>Waiting for Clients to Arrive...</div>
        )}
      </InfiniteScroll>
    </div>
  );
}
