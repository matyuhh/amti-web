import styled from "styled-components";

export const CardListContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 360px);
    grid-template-rows: repeat(2, 360px);
    grid-gap: 20px;

    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(1, 360px);
        grid-template-rows: repeat(1, 360px);
        grid-gap: 20px;
    }
`