import React from 'react'
import './sections_style/Projects.css'
import project1 from './images/thumbnail.png'

const Projects = () => (

<div id="slider">

<div id="project1">
    <span id="info_about_desktop">[desktop only!]</span>
    <div id="glitch_effect"></div>
    <img id="prj1" src={project1} alt="prj1"></img>
</div>
<div id="project2"></div>
<div id="project3"></div>
<div id="project4"></div>
<div id="project5"></div>
<div id="project6"></div>

</div>

)

export default Projects