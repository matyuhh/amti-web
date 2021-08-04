import React, { useState } from 'react';
import { send } from 'emailjs-com';

import {
    ContactFormContainer,
    ContactFormMail,
    ContactFormWrap,
    FormInputWrapper,
    FormInput,
    FormTextArea,
    SubmitButton,
    FormLabel
} from './contact-form.styles';

const ContactForm = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_c3bbw49',
          'template_rjdcirf',
          toSend,
          'user_QysDxH7yeejJA0TBWBVlU'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
    <>
        
        <ContactFormContainer>
            <ContactFormMail onSubmit={onSubmit}>
                <ContactFormWrap>
                    <FormInputWrapper>
                        <FormLabel>Nombre</FormLabel>
                        <FormInput
                            type='text'
                            name='from_name'
                            placeholder='Tu nombre'
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            type='text'
                            name='reply_to'
                            placeholder='Tu correo'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <FormLabel>Mensaje</FormLabel>
                        <FormTextArea
                            rows='10'
                            type='text'
                            name='message'
                            placeholder='Tu mensaje'
                            value={toSend.message}
                            onChange={handleChange}
                        />
                    </FormInputWrapper>
                </ContactFormWrap>
                <SubmitButton type='submit'>Enviar</SubmitButton>
            </ContactFormMail>
        </ContactFormContainer>
    </>
)}

export default ContactForm