import styled from 'styled-components';

export const ContainerIntro = styled.div`
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
`
export const IntroH1 = styled.h1`
    font-size: 3rem;
`

export const IntroH2 = styled.h2`
    font-size: 1.8rem;
    font-weight: normal;
`

