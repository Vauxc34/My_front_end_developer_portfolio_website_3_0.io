import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'

import './sections_style/ContactUs.css';

const Container_emailbox__1 = styled.div`
position:relative;
display:flex;
flex-direction:column;
height:20%;

@media (min-width:599px) {
  flex-direction:row;
  height:10%;

}

@media (min-width:1023px) {

  width:60%;

}
`

const Container_labelBox__1 = styled.div`
position:relative;
display:flex;
flex-direction:column;
height:0%;
visibility:hidden;

@media (min-width:599px) {

  flex-direction:row;
  height:10%;
  visibility:visible;

  @media (min-width:1023px) {
    width:60%;
  
  }

}

`

const Container_emailtext__1 = styled.div`
position:relative;
flex-direction:column;
display:flex;
height:60%;

@media (min-width:1023px) {
  width:60%;

}

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
      <input type="text" placeholder="type your name" name="user_name"/>
      <input type="email" placeholder="type your e-mail address" name="user_email"  />
      </Container_emailbox__1>
      <Container_emailtext__1>
      <label id="typing" >Type your message or question</label>
      <textarea name="message" placeholder="type your ask or something different" />
      <input id="send_btn" type="submit" value="Send" />
      </Container_emailtext__1>
    </form>
  );
}