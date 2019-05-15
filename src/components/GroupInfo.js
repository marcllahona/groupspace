import React from 'react';
import * as S from '../styles';

function GroupInfo(props){
    const {group} = props;

    return(
        <S.Card>
            <div>{group.backgroundImage}</div>
            <div>{group.image}</div>
            <div>{group.name}</div>
            <div>{group.description}</div>
            <div>{group.category}</div>
            <div>{group.url}</div>
        </S.Card>
    )
}

export default GroupInfo
