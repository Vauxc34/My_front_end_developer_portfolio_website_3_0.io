import React from 'react'
import './sections_style/Heading.css'
import heading from './images/header.jpg'

const Heading = () => (

<div id="heading">

<div id="shape1"></div>

<img src={heading}></img>

<h1>wiktor wyrostek front end developer</h1>

<ul>
    <li><a href="#slider">my works</a></li>
    <li><a href="#information">about me</a></li>
    <li><a href="#footer">contact</a></li>
</ul>

<p id="animated_paragraph">hello_world?</p>

<div id="shape2"></div>

</div>

)

export default Heading