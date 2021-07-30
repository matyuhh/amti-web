import React from 'react';

import ContactForm from '../../components/contact-form/contact-form.component';
import { 
    ContainerContactMe 
} from './contact-me.styles';

const ContactMe = () => (
    <ContainerContactMe>
        <ContactForm/>
    </ContainerContactMe>
);

export default ContactMe;