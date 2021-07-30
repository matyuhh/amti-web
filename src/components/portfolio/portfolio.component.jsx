import React from 'react';
import Carrousel from '../../components/carrousel/carrousel.component';
import slides from '../../components/carrousel/slides-data';
import { ContainerPortfolio } from './portfolio.styles';

const Portfolio = () => (
    <ContainerPortfolio>
        <h1>Portfolio</h1>
        <Carrousel slides={slides}/>
    </ContainerPortfolio>   
)

export default Portfolio;