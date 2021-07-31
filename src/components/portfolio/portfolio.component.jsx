import React from 'react';
import Carrousel from '../../components/carrousel/carrousel.component';
import slides from '../../components/carrousel/slides-data';
import { ContainerPortfolio } from './portfolio.styles';

const Portfolio = () => (
    <ContainerPortfolio>
        <Carrousel slides={slides}></Carrousel>
    </ContainerPortfolio>   
)

export default Portfolio;