import { useQuery } from "@apollo/client";
import React from "react";
import "./App.css";

import AdvisorInformation from "./components/AdvisorInformation";
import ArrivingClients from "./components/ArrivingClients";
import { GET_ADVISOR } from "../helpers/queries";
import { Spin } from "antd";
function App() {
  const {
    data: advisor,
    loading: advisorLoading,
    error: advisorError
  } = useQuery(GET_ADVISOR, {
    variables: {
      email: "douglasadams@autonation.com"
    }
  });

  if (advisorLoading) {
    return <Spin>AdvisorLoading</Spin>;
  }

  if (advisorError) {
    return <div>AdvisorError</div>;
  }

  return (
    <div className="wrapper">
      <AdvisorInformation />
      <ArrivingClients />
    </div>
  );
}

export default App;
