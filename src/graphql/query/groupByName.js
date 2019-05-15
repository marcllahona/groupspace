import gql from 'graphql-tag';

const GROUP_BY_NAME_QUERY = gql`
    query groupByName($name: String!){
        groupByName(name: $name){
            __typename
            id
            updatedAt
            name
            url
            description
            category
            topics
            image
            backgroundImage
            creator{
                __typename
                id
                firstName
                lastName
                fullName
                email
                image
            }
            channels{
                __typename
                id
                updatedAt
                name
                description
            }
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

export default GROUP_BY_NAME_QUERY;
