import styled from "styled-components";

export const CardContainerLink = styled.a`
    text-decoration: none;
    list-style: none;
`

export const CardContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width:100%;
    height:100%;
    font-family: Cairo, sans-serif;
    line-height: 1;
    color: rgba(53, 56, 57, 0.8);
    border-bottom: 1px solid rgba(53, 56, 57, 0.2);
    border-right: 1px solid rgba(53, 56, 57, 0.2);
    border-left: 1px solid rgba(53, 56, 57, 0);
    border-top: 1px solid rgba(53, 56, 57, 0);
    transition: 0.5s ease-in-out;
    &:hover {
        width: 104%;
        border: 1px solid rgba(53, 56, 57, 0.8);
        color: rgba(53, 56, 57, 1);
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`

export const CardTitle = styled.h1`
    font-size: 32px;
    margin-bottom: 15px;
    font-weight: bold;
`

export const CardDescription = styled.p`
    font-size: 16px;
`


