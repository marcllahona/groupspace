import React from 'react'
import * as S from "../styles";
import theme from "../lib/theme";

function ChannelBar({children}){
    return(
        <S.SideSection width={400} color={theme.palette.background}>
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


export default ChannelBar
