import React from 'react';


import './contact-form.styles.scss';

const ContactForm = () => (
    <div className='form-container'>
        <form method="POST" action="">
            <div className='form-input'>
                <input type="text" name="name" id="" required/>
            </div>
            <div className='form-input'>
                <input type="text" name="email" id="" required/>
            </div>
            <div className="form-textarea">
                <textarea name="content" id="" cols="30" rows="5" required></textarea>
            </div>
            <button className='button'>Submit</button>
        </form>
    </div>
)

export default ContactForm