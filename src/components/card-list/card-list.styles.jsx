import styled from "styled-components";

export const CardListContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 360px);
    grid-template-rows: repeat(2, 360px);
    grid-gap: 20px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
    }
`