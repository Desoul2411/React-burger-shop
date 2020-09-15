import React, {useContext} from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
    position: fixed;
    top:0;
    left:0;
    z-index:999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LoginButton = styled.button`
    background-color:transparent;
    border: none;
    color: white;
    font-size: 16px;
    outline: none;
`;

const User = styled.div`
    display: flex;
    align-items:center;
    text-align: center;
`;

const LogOut = styled.span`
    font-size:20px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 30px;
`;

const Figure = styled.figure`
    margin: 0px 30px;
`;

const UserIcon = styled.img`
    max-width: 45px;
`;

const NavBar = () => {
    const {auth: { authentication, logIn, logOut}} = useContext(Context);  // сразу деструктурируем из полученного объекта auth 

    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="лого"/>
                <H1>MrDonald's</H1>
            </Logo>

            {authentication ? 
            <User>
                <Figure>
                    <UserIcon src={signImg} alt={authentication.displayName}/>
                    <figcaption>{authentication.displayName}</figcaption>
                </Figure>
                <LogOut title="Выйти" onClick={logOut}>X</LogOut> 
            </User> : 
            <LoginButton onClick={logIn}>
                <Figure>
                    <UserIcon src={signImg} alt="изображение кнопки войти"/>
                    <figcaption>Войти</figcaption>
                </Figure>
                {/* <p>войти</p>  */}
            </LoginButton>}
        </NavBarStyled>
    );
}
export default NavBar;