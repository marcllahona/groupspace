import gql from 'graphql-tag';

const CREATE_MESSAGE_BY_NAME_MUTATION = gql`
    mutation createMessageByName(
        $content: String!
        $authorID: ID!
        $channelName: String!
        $groupName: String!
    ) {
        createMessageByName(
            content: $content
            authorID: $authorID
            channelName: $channelName,
            groupName: $groupName
        ) {
            __typename
            id
            createdAt
            content
            author {
                __typename
                id
                firstName
                lastName
                fullName
            }
            channel{
                __typename
                id
                name
            }
        }
    }
`;

export default CREATE_MESSAGE_BY_NAME_MUTATION;
