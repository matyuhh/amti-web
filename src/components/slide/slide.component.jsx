import React from 'react';

import {
    SlideContainer,
    SlideWrapper,
    SlideImage,
    SlideTitle,
    SlideDescription,
    SlideTextContainer
} from './slide.styles';

const SlideComponent = ({image, title, description}) => {
    return (
        <>
            <SlideContainer>
                <SlideWrapper>
                    <SlideImage src={image}/>
                    <SlideTextContainer>
                        <SlideTitle>{title}</SlideTitle>
                        <SlideDescription>{description}</SlideDescription>
                    </SlideTextContainer>
                </SlideWrapper>
            </SlideContainer>
        </>
    )
}

export default SlideComponent;