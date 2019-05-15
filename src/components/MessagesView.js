import React from "react";
import * as S from '../styles';

function MessagesView({children}){
    return(
        <S.ChannelView>
            {
                children
            }
        </S.ChannelView>
    )
}

export default MessagesView
