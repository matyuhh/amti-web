import styled from 'styled-components';

export const ContactFormContainer = styled.div`

`
export const ContactFormMail = styled.form`
    width: 90%;
`;

export const ContactFormWrap = styled.div`
    display:flex;
    flex-direction: column;
    width: 600px;
    align-items: center;
    justify-content: center;
    text-align: start;
    @media screen and (max-width: 1024px){
        width: 380px;
    }
`

export const FormLabel = styled.label`
    align-self: flex-start;
    text-align: start;
    font-size: 18px;
    font-family: Cairo, sans-serif;
    color: #353839;
`
export const FormInputWrapper = styled.div`
    width: 90%;
    padding: 20px 0;
`
export const FormInput = styled.input`
    width: 100%;
    font-family: Cairo, sans-serif;
`
export const FormTextArea = styled.textarea`
    width: 100%;
`
export const SubmitButton = styled.button`
    align-self: flex-end;
    font-family: Cairo, sans-serif;
    width: 70px;
    height: 40px;
    border-radius: 10%;
    border: 1px solid #353839;
    box-shadow: 2px 1px 1px #353839;
    background: white;
    font-size: 18px;
    font-weight: bold;
    color: #353839;
    transition: 0.4s;

    &:hover {
        background:#353839;
        color: white;
        border: 1px solid #353839;
        box-shadow: 2px 1px 1px #353839;
        opacity: 1;
    }
`
