import React from 'react'
import './sections_style/Footer.css'
import contact_img from './images/contact.png'

const Footer = () => (

<div id="footer">

    <img id="contact_img" src={contact_img} alt="contact_img"></img>

    <form action="">
        <h2>any question's?</h2>
        <input type="textarea" id="textarea"></input>
        <input type="textarea" id="email__"></input>
        <input type="button" id="send_btn"></input>
    </form>

    <div id="contact_email">
        <span id="email">wiktor wyrostek &copy;	2021 </span>
    </div>

</div>

)

export default Footer