import { gql } from "apollo-boost";

const GET_USER = gql`
  query GetUser($licensePlate: String!) {
    getUser(licensePlate: $licensePlate) {
      email
      id
      city
      state
      first_name
      last_name
      country
      zip_code
      licensePlate
      assignedTo
      service_history
    }
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

const PARKED_USERS = gql`
  query ParkedUsers {
    parkedUsers
  }
`;

const REMOVE_PARKED_USER = gql`
  mutation RemoveParkedUser($license: String!) {
    removeParkedUser(license: $license)
  }
`;

export { GET_USER, GET_ADVISOR, PARKED_USERS, REMOVE_PARKED_USER };
