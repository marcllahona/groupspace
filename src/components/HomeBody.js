import React from 'react'
import {Query} from "react-apollo";
import {withRouter} from "react-router-dom";
import MessagesView from "./MessagesView";
import ChatList from "./chat/ChatList";
import ChatFooter from "./chat/ChatFooter";
import ChatQuery from "./chat/ChatQuery";
import Loader from "./Loader";
import GroupView from "./GroupView";
import {optionalChaining} from "../lib/utils";
import GROUP_BY_NAME_QUERY from "../graphql/query/groupByName";
import * as S from '../styles';

function HomeBody(props){
    const groupURL = optionalChaining(props, 'match.params.group');
    const channelURL = optionalChaining(props, 'match.params.channel');
    return(
        <Query query={GROUP_BY_NAME_QUERY} variables={{name: groupURL}}>
            {({data, loading, error}) => {
                if (loading) return  <Loader/>;
                if (error || !data) return <S.CentralSection>
                    Sorry we could not load what you were looking for!
                </S.CentralSection>
                const { groupByName } = data;
                console.log(groupByName);
                return(
                    <S.CentralSection>
                    {
                        groupByName ?
                            <>
                                <GroupView group={groupByName} channelURL={channelURL} groupURL={groupURL}/>
                                <MessagesView>
                                    <ChatQuery channelName={channelURL} groupName={groupURL}>
                                        {(messages, subscribeToMoreMessages) => {
                                            return (
                                                <>
                                                    <ChatList
                                                        messages={messages}
                                                        subscribeToMoreMessages={subscribeToMoreMessages}
                                                    />
                                                    {
                                                        channelURL && <ChatFooter channelName={channelURL} groupName={groupURL}/>
                                                    }
                                                </>
                                            )
                                        }}
                                    </ChatQuery>
                                </MessagesView>
                            </>
                            :
                            <div>
                                Sorry we could not load what you were looking for!
                            </div>
                    }
                    </S.CentralSection>
                )
            }}
        </Query>
    )
}

export default withRouter(HomeBody)
