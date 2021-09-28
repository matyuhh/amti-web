import ClothImage from '../../assets/cloth-ecommerce.PNG'
import PokedexImage from '../../assets/pokedex-for-oldies.PNG'
import YelpCampImage from '../../assets/yelp-camp.PNG'
import SolidityImage from '../../assets/solidity.PNG'


export const cardInfo = [
    {
        id: 1,
        image: ClothImage,
        title: "Cloth Ecommerce",
        description: 'Hecho con ReactJS usando Redux, ReduxThunk, ReduxSaga y Stripe.',
        url: 'https://cloth-ecommerce-amti.herokuapp.com/'
    },
    {
        id: 2,
        image: PokedexImage,
        title: "Pokedex For Oldies",
        description: 'Pokedex de primera generación hecha en ReactJS. Interactua con una API de donde trae los datos.',
        url: 'https://pokedex-for-oldies.vercel.app/'
    },
    {
        id: 3,
        image: YelpCampImage,
        title: "YelpCamp",
        description: 'Webapp diseñada en NodeJS, Express y MongoDB para el curso de Colt Steele. Uso de Bootstrap y varias tecnologías/librerías adicionales.',
        url: '/'
    },
    {
        id: 4,
        image: SolidityImage,
        title: "CryptoFunding",
        description: 'Diseñada con NextJS, web3 y Solidity. Pseudoclon de Kickstarter pero con el uso de  Ethereum.',
        url: 'https://cryptofunding.vercel.app'
    }

]

