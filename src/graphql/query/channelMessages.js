import gql from 'graphql-tag';

const CHANNEL_MESSAGES_QUERY = gql`
    query channelMessages($id: ID!){
        channelMessages(id: $id){
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

export default CHANNEL_MESSAGES_QUERY;
