import React from 'react';

import {
    SlideContainer,
    SlideWrapper,
    SlideImage,
    SlideTitle,
    SlideDescription
} from './slide.styles';

const SlideComponent = ({image, title, description}) => {
    return (
        <>
            <SlideContainer>
                <SlideWrapper>
                    <SlideImage src={image}/>
                    <SlideTitle>{title}</SlideTitle>
                    <SlideDescription>{description}</SlideDescription>
                </SlideWrapper>
            </SlideContainer>
        </>
    )
}

export default SlideComponent;