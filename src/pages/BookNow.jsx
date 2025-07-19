import React, { useRef, useState } from 'react';
import './BookNow.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import emailjs from 'emailjs-com';

function BookNow() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const [formRef, formVisible] = useRevealOnScroll();
  const formElement = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
      formElement.current,
      'YOUR_PUBLIC_KEY' // replace with your EmailJS public key
    )
      .then(() => {
        setSuccess(true);
        formElement.current.reset();
      })
      .catch(() => setSuccess(false))
      .finally(() => setSending(false));
  };

  return (
    <div id="book" className="booknow-container">
      <h2
        className={`booknow-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Book Now
      </h2>
      <form
        className={`booknow-form reveal-on-scroll${formVisible ? ' visible' : ''}`}
        onSubmit={handleSubmit}
        ref={formElement}
      >
        <input className="booknow-input" name="name" type="text" placeholder="Name" required />
        <input className="booknow-input" name="email" type="email" placeholder="Email" required />
        <input className="booknow-input" name="service" type="text" placeholder="Service" required />
        <input className="booknow-input" name="date" type="date" required />
        <textarea className="booknow-input" name="message" placeholder="Message" rows={4}></textarea>
        <button className="booknow-btn" type="submit" disabled={sending}>
          {sending ? 'Sending...' : 'Book Now'}
        </button>
        {success === true && <div className="booknow-success">Your booking request was sent!</div>}
        {success === false && <div className="booknow-error">Failed to send. Please try again.</div>}
      </form>
    </div>
  );
}

export default BookNow;