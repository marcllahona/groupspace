import React from "react";
import PropTypes from "prop-types";
import {Query} from "react-apollo";
import {optionalChaining} from "../../lib/utils";
import {FETCH_POLICY} from "../../lib/constants";
import CHANNEL_MESSAGES_BY_NAME_QUERY from "../../graphql/query/channelMessageByName";
import ON_CREATE_MESSAGE_BY_NAME_SUBSCRIPTION from "../../graphql/subscription/onCreateMessageByName";
import GROUP_MESSAGES_QUERY from "../../graphql/query/groupMessages";
import ON_CREATE_GROUP_MESSAGE from "../../graphql/subscription/onCreateGroupMessage";

function ChatQuery(props) {
    const { children, channelName, groupName, last } = props;
    return(
        <>
            {
                channelName ?
                    <Query query={CHANNEL_MESSAGES_BY_NAME_QUERY} fetchPolicy={FETCH_POLICY.CACHE_AND_NETWORK} variables={{ channelName, groupName }}>
                        {({ data, loading, error, subscribeToMore }) => {
                            if (loading || error || !data) return <></>;
                            const subscribeToMoreMessages = () => {
                                subscribeToMore({
                                    document: ON_CREATE_MESSAGE_BY_NAME_SUBSCRIPTION,
                                    variables: {channelName,groupName },
                                    updateQuery: (prev, {subscriptionData}) => {
                                        if (!optionalChaining(subscriptionData, 'data')) return prev;
                                        const newMessage = optionalChaining(subscriptionData, 'data.onCreateMessageByName');
                                        return Object.assign({}, prev, {
                                            channelMessagesByName: [newMessage, ...prev.channelMessagesByName]
                                        })
                                    }
                                });
                            };
                            const messages = data.channelMessagesByName;
                            return children(messages, subscribeToMoreMessages)
                        }}
                    </Query>
                    :
                    <Query query={GROUP_MESSAGES_QUERY} fetchPolicy={FETCH_POLICY.CACHE_AND_NETWORK} variables={{ name: groupName }}>
                        {({ data, loading, error, subscribeToMore }) => {
                            if (loading || error || !data) return <></>;
                            const subscribeToMoreMessages = () => {
                                subscribeToMore({
                                    document: ON_CREATE_GROUP_MESSAGE,
                                    variables: {name: groupName },
                                    updateQuery: (prev, {subscriptionData}) => {
                                        if (!optionalChaining(subscriptionData, 'data')) return prev;
                                        const newMessage = optionalChaining(subscriptionData, 'data.groupMessages');
                                        return Object.assign({}, prev, {
                                            groupMessages: [newMessage, ...prev.groupMessages]
                                        })
                                    }
                                });
                            };
                            const messages = data.groupMessages;
                            return children(messages, subscribeToMoreMessages)
                        }}
                    </Query>
            }
            </>
    )
}

ChatQuery.propTypes = {
    children: PropTypes.func.isRequired,
    channelName: PropTypes.string,
    groupName: PropTypes.string.isRequired,
    last: PropTypes.number,
};

export default ChatQuery
