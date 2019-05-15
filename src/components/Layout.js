import React from "react";
import Header from "./Header";
import Body from "./Body";
import * as S from '../styles';

function Layout({children}){
    return(
        <S.App>
            <Header/>
            <Body>
                {
                    children
                }
            </Body>
        </S.App>
    )
}

export default Layout
