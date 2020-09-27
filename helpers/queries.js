import { gql } from "apollo-boost";

const GET_USER = gql`
  query GetUser($licensePlate: String!) {
    getUser(licensePlate: $licensePlate)
  }
`;

const GET_ADVISOR = gql`
  query GetAdvisor($email: String!) {
    getAdvisor(email: $email) {
      firstName
      lastName
      email
      password
      photoLink
    }
  }
`;

// const ADD_USER = gql`
//   query GetAdvisor($email: String!) {
//     getAdvisor(email: $email)
//   }
// `;

module.exports = {
  GET_USER,
  GET_ADVISOR
};
