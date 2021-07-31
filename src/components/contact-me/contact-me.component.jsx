import React from 'react';

import ContactForm from '../../components/contact-form/contact-form.component';
import { 
    ContactFormH1,
    ContactFormH2,
    ContainerContactMe
} from './contact-me.styles';

const ContactMe = () => (
    <ContainerContactMe>
        <ContactFormH1>Tenes alguna idea en mente?</ContactFormH1>
        <ContactFormH2>Hagamosla realidad...</ContactFormH2>
        <ContactForm/>
    </ContainerContactMe>
);

export default ContactMe;