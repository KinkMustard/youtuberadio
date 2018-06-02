import { gql } from "apollo-boost";

const addUser = gql`
  mutation addAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

export { addUser };
