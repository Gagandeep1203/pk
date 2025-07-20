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
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formElement.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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