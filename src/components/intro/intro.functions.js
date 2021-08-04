import styled from 'styled.components';

import {
    FaDocker,
    FaReact,
    FaNodeJs,
    FaPython,
    FaJira,
    FaHtml5,
    FaSass,
    FaDharmachakra,
    FaAws
} from 'react-icons/fa';
import {
    SiMongodb,
    SiMysql
} from 'react-icons/si';

let iconsArray = [FaDocker,
    FaReact,
    FaNodeJs,
    FaPython,
    FaJira,
    FaHtml5,
    FaSass,
    FaDharmachakra,
    FaAws,
    SiMongodb,
    SiMysql
]

const randomItem = () => {
    return iconsArray[Math.random(0,11)];
}

const oddsGenerator = () => {
    const randomNumber = Math.random(0,4);
    if (randomNumber === 0) return randomItem();
}


export const RandomBackground = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template: 25px 1fr / 25px 1fr;
`

//TRAER LOS ICONOS
//HACER ARRAY DE ICONOS
//HACER FUNCION DE ELEGIR ITEM ALEATORIO
//GENERAR GRID
//HACER FUNCION DE GENERAR O NO
//LOOPEAR CADA GRID Y EJECUTAR LA FUNCION ODDS GENERATOR
//RANDOMIZAR A CADA ITEM OPACIDAD Y ROTACION