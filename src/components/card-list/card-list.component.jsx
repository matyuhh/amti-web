import React from 'react';
import { CardListContainer } from './card-list.styles';
import { cardInfo } from './card-list.info';
import Card from '../card/card.component';

const CardList = () => {

    return (
        <>
            <CardListContainer>
                {cardInfo.map(card => <Card info={card}/>)}
            </CardListContainer>
        </>
    )
};

export default CardList;
