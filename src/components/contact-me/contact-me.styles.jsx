import styled from 'styled-components';

export const ContainerContactMe = styled.div`
    height: 100vh;
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
    }
`;
export const ContactFormH1 = styled.h1`
    font-size: 32px;
    font-family: sans-serif;
    color: #353839;
`;

export const ContactFormH2 = styled.h2`
    font-size: 24px;
    font-family: sans-serif;
    color: #353839;
`;