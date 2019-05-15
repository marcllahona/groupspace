import gql from 'graphql-tag';

const CHANNEL_MESSAGES_BY_NAME_QUERY = gql`
    query channelMessagesByName($channelName: String!, $groupName: String!){
    channelMessagesByName(channelName: $channelName, groupName: $groupName){
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

export default CHANNEL_MESSAGES_BY_NAME_QUERY;
