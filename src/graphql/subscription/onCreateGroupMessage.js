import gql from 'graphql-tag';

const ON_CREATE_GROUP_MESSAGE = gql`
    subscription onCreateGroupMessage($name: String!) {
        onCreateGroupMessage(name: $name) {
            __typename
            id
            createdAt
            updatedAt
            content
            author {
                __typename
                id
                firstName
                lastName
                fullName
                image
            }
            channel{
                __typename
                id
                name
            }
        }
    }
`;

export default ON_CREATE_GROUP_MESSAGE;
