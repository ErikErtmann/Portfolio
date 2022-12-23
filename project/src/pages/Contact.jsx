import '../components/css/Contact.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const recaptchaRef = useRef();

    const sendEmail = () => {
        if (!recaptchaRef.current.getValue()) {
            toast.error('Please complete the CAPTCHA');
            return;
        }

        if (!nameRef.current.value.trim() || !emailRef.current.value.trim() || !messageRef.current.value.trim()) {
            toast.error('Please fill out all the fields')
            return;
        }

        const params = {
            "from_name": `${nameRef.current.value} (their e-mail address: ${emailRef.current.value})`,
            "to_name": "Erik",
            "message": messageRef.current.value
        }
    
    emailjs
    .send('service_enc290a', 'template_zbxt7u2', params, 'j_ePGUxkr48bkDG-m')
    .then(() => {
        toast.success("Email successfully sent")
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        recaptchaRef.current.execute();
      }, 
      (error) => {
        toast.error(error.text);
      }
    );
};

    return (
      <div className='ContactContainer'>
        <div className='background'>
            <form className='form'>
            <div className='ContactColumn'>
                <label className='parag' htmlFor="name">Name:</label>
                <input type="text" id="name" ref={nameRef} />
                <br />
                <label className='parag' htmlFor="email">Email:</label>
                <input type="text" id="email" ref={emailRef} />
                <br />
                <label className='parag' htmlFor="message">Message:</label>
                <textarea id="message" ref={messageRef} />
                <br />
                <ReCAPTCHA ref ={recaptchaRef} sitekey="6LeCkJ8jAAAAABP37mIxG8GmfTlIjJMmBgnBpob-" />
                <button type="button" onClick={sendEmail}>
                Send
                </button>
            </div>
            </form>
        </div>
        <ToastContainer />
      </div>
      );
}

export default Contact;