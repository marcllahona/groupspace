import React from 'react';
import * as S from '../styles';
import {NavLink} from "react-router-dom";

function GroupChannels(props){
    const {channels, channelURL, groupName} = props;
    console.log(channels,  channelURL, groupName);

    return(
        <S.Card>
            <S.CardHeader>Channels</S.CardHeader>
                <S.CardList>
                    <NavLink to={`/${groupName}`}><div>All Channels</div></NavLink>
                    {
                        channels.map((channel) => {
                            return(
                                <NavLink key={channel.id} to={channelURL !== undefined ? `${channel.name}` : `/${groupName.name}/${channel.name}`}>{channel.name}</NavLink>
                            )
                        })
                    }
                </S.CardList>
        </S.Card>
    )
}

export default GroupChannels
