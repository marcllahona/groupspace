import gql from 'graphql-tag';

const ME_QUERY = gql`
  query me {
    me {
      __typename
      id
      firstName
      lastName
      fullName
      email
      image
    }
  }
`;

export default ME_QUERY;
