import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top:0;
    left:0;
    z-index:999;
    height: 80px;
    width: 100vw;
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
    with: 50px;
`;

const LoginButton = styled.button`
    background-color:transparent;
    border: none;
    color: white;
    font-size: 16px;
    outline: none;
`;





const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="лого"/>
            <H1>MrDonald's</H1>
        </Logo>

        <LoginButton>
            <img src={signImg} alt="изображение кнопки войти"/>
            <p>войти</p> 
        </LoginButton>
    </NavBarStyled>
);

export default NavBar;