import React from 'react';
import { 
    FaGithub, 
    FaLinkedin,
} from 'react-icons/fa';
import { 
    BsBriefcase,
    BsPersonFill,
    BsEnvelope,
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
    MenuItemTitle,   
} from './navbar.styles';

const Navbar = () => {

    return (
        <ContainerNavbar>
            <MenuTitle>
                <MenuH1>Matías Gutiérrez</MenuH1>
                <MenuH2>Fullstack Dev</MenuH2>
                <SocialMedia>
                    <SocialLink href='https://github.com/matyuhh'><FaGithub/></SocialLink>
                    <SocialLink href='https://www.linkedin.com/in/mat%C3%ADas-valent%C3%ADn-guti%C3%A9rrez-315726124/'><FaLinkedin/></SocialLink>
                </SocialMedia>
            </MenuTitle>
            
            <MenuContainer>
                <MenuItem exact to='/' activeClassName='active'> 
                    <BsPersonFill/> 
                    <MenuItemTitle>Sobre mí</MenuItemTitle>
                </MenuItem>
                <MenuItem to='/contactme' activeClassName='active'> 
                    <BsEnvelope/>
                    <MenuItemTitle>Contacto</MenuItemTitle> 
                </MenuItem>
                <MenuItem to='/portfolio' activeClassName='active'> 
                    <BsBriefcase/> 
                    <MenuItemTitle>Portfolio</MenuItemTitle>
                </MenuItem>
            </MenuContainer>   
        </ContainerNavbar>
    )
}

export default Navbar;