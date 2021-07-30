import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`

export const MenuH2 = styled.h2`
    font-size: 1.8rem;
    margin-top: -25px;
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

export const SocialLink = styled(Link)`
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
`

export const MenuContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 15px;
    margin-top: 60px;
    margin-bottom: 30px;
`;

export const MenuItem = styled(Link)`
    font-size: 128px;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const MenuItemTitle = styled.h3`
    font-size: 20px;
    margin-top: -20px;
    text-decoration: none;
`