import React from 'react'
import './sections_style/Footer.css'
import contact_img from './images/contact.png'

const Footer = () => (

<div id="footer">

    <img id="contact_img" src={contact_img} alt="contact_img"></img>

    <form action="">
        <h2>any question's?</h2>
        <input type="textarea" id="textarea" placeholder="type message here"></input>
        <input type="button" value="send!" id="send_btn"></input>
    </form>

    <div id="contact_email">
        <span id="email">kaxowy12@gmail.com</span>
    </div>

</div>

)

export default Footer