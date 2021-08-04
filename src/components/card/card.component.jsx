import React from 'react'
import { 
    CardContainer,
    CardImage,
    CardTitle,
    CardDescription,
    CardContainerLink
} from './card.styles'

const Card = props => {
    return (
        <>
            <CardContainerLink href={props.info.url}>
                <CardContainer>
                    <CardImage src={props.info.image}/>
                    <CardTitle>{props.info.title}</CardTitle>
                    <CardDescription>{props.info.description}</CardDescription>
                </CardContainer>
            </CardContainerLink>
        </>
    )
};

export default Card;
