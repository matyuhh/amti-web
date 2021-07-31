import React, {useState} from 'react';

import { 
    CarrouselItem,
    ContainerCarrousel,
    LeftArrow,
    RightArrow
} from './carrousel.styles';


const Carrousel = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <ContainerCarrousel>
            <LeftArrow onClick={prevSlide}/>
            <RightArrow onClick={nextSlide}/>
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<CarrouselItem>{slide}</CarrouselItem>)}  
                    </div>
                    
                )
            })} 
        </ContainerCarrousel>
    )
}

export default Carrousel;
