import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react'

function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmail = () => {
        const params = {
            "from_name": `${nameRef.current.value} (their e-mail address: ${emailRef.current.value})`,
            "to_name": "Erik",
            "message": messageRef.current.value
        }
    
    emailjs.send('service_enc290a', 'template_zbxt7u2', params, 'j_ePGUxkr48bkDG-m')
    .then(() => {
        toast.success("Email successfully sent")
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
    }, (error) => {
        toast.error(error.text);
    });
};

    return (
        <div className="contact" id="contact">
            <label> Your name </label> <br/>
            <input ref= {nameRef} type="text" /> <br/>
            <label> Your email </label> <br/>
            <input ref= {emailRef} type="text" /> <br/>
            <label> Your message </label> <br/>
            <input ref= {messageRef} type="text" /> <br/>



            <button onClick={sendEmail}>Send e-mail</button>
            <ToastContainer />
        </div>
      );
}

export default Contact;