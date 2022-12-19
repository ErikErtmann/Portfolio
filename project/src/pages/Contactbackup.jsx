import '../components/css/Contact.css';
import emailjs from 'emailjs-com';
import { useState } from 'react';

function Contact() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_enc290a', 'template_zbxt7u2', event.target, 'j_ePGUxkr48bkDG-m')
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

    return (
      <form onSubmit={handleSendEmail}>
      {formSubmitted ? (
        <p>Your email has been sent!</p>
      ) : (
        <>
          <label htmlFor="to">To:</label>
          <input type="text" id="to" name="to" value={to} onChange={(event) => setTo(event.target.value)} />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />

          <label htmlFor="body">Body:</label>
          <textarea id="body" name="body" value={body} onChange={(event) => setBody(event.target.value)} />

          <button type="submit">Send Email</button>
        </>
      )}
    </form>);
      }
export default Contact;