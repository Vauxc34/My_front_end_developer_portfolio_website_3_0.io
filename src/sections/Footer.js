import React from 'react'
import './sections_style/Footer.css'
import EmailJS from './EmailJS'
import contact_img1 from './images/contact.jpg'

const Footer = () => (

<div id="footer">

    <img id="contact_img" src={contact_img1} alt="contact_img"></img>

    <h2 id="footer_title">Any question's?</h2>

    <EmailJS />

    <div id="contact_email">
        <span id="email">wiktor wyrostek &copy;	2021 </span>
    </div>

</div>

)

export default Footer


