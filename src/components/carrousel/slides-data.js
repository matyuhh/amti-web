import SlideComponent from '../slide/slide.component';
import ClothEcommerceImg from '../../assets/cloth-ecommerce.PNG';
import YelpCampImg from '../../assets/yelp-camp.PNG';
import PokedexImg from '../../assets/pokedex-for-oldies.PNG';
import React from 'react';

const slides = [
    <SlideComponent image={ClothEcommerceImg} title='Cloth Ecommerce' description='Desarollado en React para el curso de Andrei Neagoie. Uso de Redux, Firebase, Hooks.'/>,
    <SlideComponent image={YelpCampImg} title='YelpCamp' description='Desarrollado para el curso de Colt Steele. Uso de NodeJS, Express, MongoDB, entre otras librerías.'/>,
    <SlideComponent image={PokedexImg} title='Pokedex for Oldies' description='Pokedex desarrollada en React que consume una API que trae la información de cada pokemon.'/>,
]

export default slides;