import gql from 'graphql-tag';

const MY_GROUPS_QUERY = gql`
    query myGroups{
        myGroups{
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
        }
    }
`;

export default MY_GROUPS_QUERY;
