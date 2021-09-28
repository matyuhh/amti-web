import styled from 'styled-components';

export const ContainerPortfolio = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 30vw;

    @media screen and (max-width: 1024px) {
        margin-left: 50vw;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 0;
    }
`
    



