import React from 'react'
import PropTypes from "prop-types";
import * as S from '../styles';
import GroupImage from "./GroupImage";

function GroupRow(props){
    const { group } = props;
    return(
        <S.GroupRowLink to={`/home/${group.url}`}>
            <S.GroupRowContainer >
                <GroupImage group={group}/>
                <S.GroupRowBody>
                    <h3>{group.name}</h3>
                </S.GroupRowBody>
            </S.GroupRowContainer>
        </S.GroupRowLink>
    )
}

GroupRow.propTypes = {
    group: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
};

export default GroupRow;
