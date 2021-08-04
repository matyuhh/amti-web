import React, { useState } from 'react';

import { 
    MobileMenu,
    MobileContainer,
    MobileWrapper,
    MobileItem,
    MobileCross
} from './mobile-navbar.styles';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <MobileMenu onClick={toggle} isOpen={isOpen}/>
            <MobileCross onClick={toggle} isOpen={isOpen}/>
            <MobileContainer isOpen={isOpen}>
                    <MobileWrapper>
                        <MobileItem exact to='/' onClick={toggle} activeClassName='active'>Sobre mí</MobileItem>
                        <MobileItem to='/contactme' onClick={toggle} activeClassName='active'>Contacto</MobileItem>
                        <MobileItem to='/portfolio' onClick={toggle} activeClassName='active'>Portfolio</MobileItem>
                    </MobileWrapper>
            </MobileContainer>
        </>
    ) 
};

export default MobileNavbar;