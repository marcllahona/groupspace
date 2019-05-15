import React from 'react'
import PropTypes from "prop-types";
import * as S from '../styles';

function GroupBar({children}){
    return(
        <S.SideSection width={250} >
            <S.SideSectionBody>
                <S.SideSectionContainer>
                    {
                        children
                    }
                </S.SideSectionContainer>
            </S.SideSectionBody>
        </S.SideSection>
    )
}

GroupBar.propTypes = {
    children: PropTypes.element.isRequired,
};

export default GroupBar
