import React from "react";
import "./App.css";

import AdvisorInformation from "./components/AdvisorInformation";
import ArrivingClients from "./components/ArrivingClients";

function App() {
  return (
    <div className="wrapper">
      <AdvisorInformation />
      <ArrivingClients />
    </div>
  );
}

export default App;
