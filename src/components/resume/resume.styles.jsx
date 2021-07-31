import styled from 'styled-components';

export const ContainerResume = styled.div`
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

export const ImageResume = styled.img`

    @media screen and (max-width: 1024px){
        width: 400px;
    }
    @media screen and (max-width: 860px){
        width: 300px;
    }
    @media screen and (max-width: 768px){
        width: 468px;
    }
`

