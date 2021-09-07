import React from 'react'
import './sections_style/Footer.css'
import EmailJS from './EmailJS'
import contact_img1 from './images/contact.jpg'

const Footer = () => (

<div id="footer">

    <img id="contact_img" src={contact_img1} alt="contact_img"></img>

    <EmailJS />

    <div id="contact_email">
        <span id="email">wiktor wyrostek &copy;	2021 </span>
    </div>

</div>

)

export default Footer


