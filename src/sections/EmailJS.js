import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'

import './sections_style/ContactUs.css';

const Container_emailbox__1 = styled.div`
position:relative;
display:flex;
height:15%;

`

const Container_labelBox__1 = styled.div`
position:relative;
display:flex;
height:10%;

`

const Container_emailtext__1 = styled.div`
position:relative;
flex-direction:column;
display:flex;
height:60%;

`

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
      <Container_labelBox__1>
      <label>Name and username</label>
      <label>E-mail Address</label>
      </Container_labelBox__1>
      <Container_emailbox__1>
      <input type="hidden" name="contact_number" />
      <input type="text" name="user_name"/>
      <input type="email" name="user_email"  />
      </Container_emailbox__1>
      <Container_emailtext__1>
      <label>Type your message or question</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      </Container_emailtext__1>
    </form>
  );
}