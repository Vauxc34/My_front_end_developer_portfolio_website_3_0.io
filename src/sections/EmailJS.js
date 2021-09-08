import React from 'react';
import emailjs from 'emailjs-com';

import './sections_style/ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1khkz0p', 'wiktor_dev', e.target, 'user_g90xf8IUdcMgVAAwp1stQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name and username</label>
      <input type="text" name="user_name" placeholder="type you name and username here" />
      <label>E-mail Address</label>
      <input type="email" name="user_email" placeholder="type your e-mail here" />
      <label>Type your message or question</label>
      <textarea name="message" placeholder="..." />
      <input type="submit" value="Send" />
    </form>
  );
}