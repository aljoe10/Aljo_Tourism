import React, { useState } from 'react';
import './Contact.css'; 

function ContactForm() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'message') {
      setMessage(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = () => {
    // Here, you can handle sending the message to the server or perform any necessary actions
    setShowResult(true);
    document.body.classList.add("sent"); 
  };

  return (
    <div className = "contact">
    <div className="wrapper centered">
      <article className="letter">
        <div className="side">
          <h1>Contact us</h1>
          <p>
            <textarea
              name="message"
              placeholder="Your message"
              value={message}
              onChange={handleInputChange}
            ></textarea>
          </p>
        </div>
        <div className="side">
          <p>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <button id="sendLetter" onClick={handleSubmit}>Send</button>
          </p>
        </div>
      </article>
      <div className="envelope front"></div>
      <div className="envelope back"></div>
      {showResult && <p className="result-message centered">Thank you for your message</p>}
    </div>
    </div>
  );
}

export default ContactForm;
