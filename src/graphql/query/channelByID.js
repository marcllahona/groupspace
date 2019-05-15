import gql from 'graphql-tag';

const CHANNEL_QUERY = gql`
    query channelByID($id: ID!){
        channelByID(id: $id){
            __typename
            id
            updatedAt
            creator{
                __typename
                id
                firstName
                lastName
                email
                image
            }
            group{
                __typename
                id
                name
            }
            name
            description
            participants{
                __typename
                id
                firstName
                lastName
                email
                image
            }
        }
    }
`;

export default CHANNEL_QUERY;
