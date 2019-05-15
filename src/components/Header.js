import React from 'react';
import LogoIcon from "./icons/LogoIcon";
import SettingsAlert from "./alerts/SettingsAlert";
import * as S from '../styles';

function Header() {
    return(
        <S.Header>
            <S.Navigation>
                <LogoIcon/>
                <S.NavigationGroup>
                    <S.NavigationLink to={"/home"}>Home</S.NavigationLink>
                    <S.NavigationLink to={"/explore"}>Explore</S.NavigationLink>
                    <S.NavigationLink to={"/add"}>Add</S.NavigationLink>
                </S.NavigationGroup>
                <SettingsAlert/>
            </S.Navigation>
        </S.Header>
    )
}

export default Header
