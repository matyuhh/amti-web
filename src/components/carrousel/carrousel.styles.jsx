import styled from 'styled-components';
import {
    FaArrowAltCircleRight, 
    FaArrowAltCircleLeft
} from 'react-icons/fa';

export const ContainerCarrousel = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CarrouselItem = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 1000px;
    height: 600px;
    border-radius: 10px;
`

export const Slide = styled.div`
    opacity: 0;
    transition-duration: 1s ease;

    
    &.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`

export const RightArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;    
`
