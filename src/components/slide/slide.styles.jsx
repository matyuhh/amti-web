import styled from 'styled-components';

export const SlideContainer = styled.div`
    width: 800px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px){
        width: 400px;
    }
`
export const SlideWrapper = styled.div`
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1000px){
        width: 400px;
    }
`
export const SlideImage = styled.img`
    width: 85%;
    height: 65%;
    top: 0;
    @media screen and (max-width: 1024px){
        width: 400px;
    }

    @media screen and (max-width: 860px){
        width: 300px;
    }
`

export const SlideTextContainer = styled.div`
    margin-top: 10px;
    padding: 20px;
`
export const SlideTitle = styled.h1`
    margin-top: -20px;
    font-size: 32px;
    font-family: sans-serif;
    font-weight: bold;
`
export const SlideDescription = styled.p`
    font-size: 16px;
    font-family: sans-serif;
`
