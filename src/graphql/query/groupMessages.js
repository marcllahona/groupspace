import gql from 'graphql-tag';

const GROUP_MESSAGES_QUERY = gql`
    query groupMessages($name: String!){
        groupMessages(name: $name){
            __typename
            id
            createdAt
            content
            author{
                __typename
                id
                firstName
                lastName
                fullName
                email
                image
            }
            channel{
                __typename
                id
                updatedAt
                name
                description
            }
        }
    }
`;

export default GROUP_MESSAGES_QUERY;
