import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

export const MobileMenu = styled(BsList)`
    display: none;
    color: #353839;

    @media screen and (max-width: 768px) {
        position: fixed;
        top:10px;
        left: 10px;
        width: 48px;
        height: 48px;
        display: inline;
        cursor: pointer;
        z-index: 999;
        transition: 0.2s ease-in-out;
        display: ${({ isOpen }) => (isOpen ? 'none' : 'display')};
        &:hover {
            opacity: 0.2;
            transition: 0.2s ease-in-out;
        }
    }
`
export const MobileCross = styled(ImCross)`
    display: none;
    color: white;

    @media screen and (max-width: 768px) {
        position: fixed;
        top:10px;
        left: 10px;
        width: 48px;
        height: 48px;
        display: inline;
        cursor: pointer;
        z-index: 999;
        transition: 0.2s ease-in-out;
        display: ${({ isOpen }) => (isOpen ? 'display' : 'none')};
        &:hover {
            opacity: 0.2;
            transition: 0.2s ease-in-out;
        }
    }
`

export const MobileContainer = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        z-index: 998;
        position: fixed;
        text-align: center;
        background: black;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        background:#353839;
        color: white;
        transition: opacity 0.5s ease-in-out;
        overflow: hidden;
        opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
        top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
        display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
    }
`

export const MobileWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const MobileItem = styled(NavLink)`
    padding: 10%;
    font-size: 2.5rem;
    color: white;
    text-decoration: none;
    list-style: none;
    font-family: Cairo, sans-serif;
    line-height: 1;
    transition: 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.6;
        transition: 0.2s ease-in-out;
    }

    &.active{
        opacity: 0.2;
    }
`