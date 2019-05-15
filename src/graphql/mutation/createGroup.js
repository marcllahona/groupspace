import gql from 'graphql-tag';

const CREATE_GROUP_MUTATION = gql`
    mutation createGroup(
        $name: String!
        $description: String!
        $category: String!
        $url: String!
    ) {
        createGroup(
            name: $name
            description: $description
            category: $category,
            url: $url
        ) {
            __typename
            id
            createdAt
            name
            url
            category
            description
        }
    }
`;

export default CREATE_GROUP_MUTATION;
