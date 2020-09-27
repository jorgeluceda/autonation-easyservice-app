import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://autonation-store.herokuapp.com/",
  cache: new InMemoryCache()
});

// client.query({
//   query: gql`
//     query GetUser {
//       getUser(licensePlate:"KGZA53") {
//         licensePlate
//         email
//         id
//         city
//         state
//         country
//         zip_code
//         assignedTo
//       }
//   }
//   `
//   }).then(result => {
//     console.log(result)
//   }
//   );

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
