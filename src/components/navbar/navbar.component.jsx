import React from 'react';

import { 
    FaGithub, 
    FaLinkedin 
} from 'react-icons/fa';
import { 
    BsFileText,
    BsBriefcase,
    BsPersonFill,
    BsEnvelope
} from "react-icons/bs";

import { 
    ContainerNavbar, 
    MenuContainer, 
    MenuTitle, 
    SocialMedia, 
    SocialLink, 
    MenuH1,
    MenuH2, 
    MenuItem,
    MenuItemTitle
} from './navbar.styles';

const Navbar = () => {

    return (
        <ContainerNavbar>
            <MenuTitle>
                <MenuH1>Matías Gutiérrez</MenuH1>
                <MenuH2>Fullstack Dev</MenuH2>
                <SocialMedia>
                    <SocialLink href='https://www.linkedin.com/in/mat%C3%ADas-valent%C3%ADn-guti%C3%A9rrez-315726124/'><FaGithub/></SocialLink>
                    <SocialLink href='https://github.com/matyuhh'><FaLinkedin/></SocialLink>
                </SocialMedia>
            </MenuTitle>
            
            <MenuContainer>
                <MenuItem to='/'> 
                    <BsPersonFill/> 
                    <MenuItemTitle>Sobre mí</MenuItemTitle>
                </MenuItem>
                <MenuItem to='/contactme'> 
                    <BsEnvelope/>
                    <MenuItemTitle>Contacto</MenuItemTitle> 
                </MenuItem>
                <MenuItem to='/resume'> 
                    <BsFileText/> 
                    <MenuItemTitle>CV</MenuItemTitle>
                </MenuItem>
                <MenuItem to='/portfolio'> 
                    <BsBriefcase/> 
                    <MenuItemTitle>Portfolio</MenuItemTitle>
                </MenuItem>
            </MenuContainer>   
        </ContainerNavbar>
    )
}

export default Navbar;