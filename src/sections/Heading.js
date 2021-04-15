import React from 'react'
import './sections_style/Heading.css'
import heading from './images/heading.gif'

const Heading = () => (

<div id="heading">

<img src={heading}></img>

<ul>
    <li><a href="#slider">my works</a></li>
    <li><a href="#information">about me</a></li>
    <li><a href="#footer">contact</a></li>
</ul>

<div id="end_box">
<p id="animated_paragraph">hello_world?</p>
</div>

</div>

)

export default Heading