import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerNavbar = styled.nav`
    position: absolute;
    background-color: #353839;
    color: white;
    display: flex;
    width: 30vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-family: Cairo, sans-serif;
    line-height: 1;

    @media screen and (max-width: 1024px) {
        width: 50vw;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 100%;
        display: none;
    }
`;

export const MenuTitle = styled.div`
    margin-top: -20px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media screen and (max-width: 768px){
        margin: 1px;
    }
`

export const MenuH1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 10px;
`

export const MenuH2 = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: normal;
`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100px;
    height: 70px;
`

export const SocialLink = styled.a`
    border-radius: 50%;
    height: 50px;
    width: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 3px solid white;
    padding: 0 10px;
    margin: 0 5px;
    color: white;
    transition: 0.2s;
    &:hover {
        opacity: 0.6;
    }
`

export const MenuContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 15px;
    margin-top: 60px;
    margin-bottom: 30px;
`;

export const MenuItem = styled(NavLink)`
    font-size: 128px;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: 0.2s;
    text-decoration: none;
    list-style: none;
    &:hover {
        opacity: 0.6;
    }

    &.active{
        opacity: 0.2;
    }
`

export const MenuItemTitle = styled.h3`
    font-size: 20px;
    margin-top: -20px;
    text-decoration: none;
`
