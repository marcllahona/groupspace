import gql from 'graphql-tag';

const ON_CREATE_MESSAGE_BY_NAME_SUBSCRIPTION = gql`
    subscription onCreateMessageByName($channelName: String!, $groupName: String!) {
        onCreateMessageByName(channelName: $channelName, groupName: $groupName) {
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

export default ON_CREATE_MESSAGE_BY_NAME_SUBSCRIPTION;
