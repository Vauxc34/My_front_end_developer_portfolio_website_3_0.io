import React from 'react'
import './sections_style/Projects.css'

import project1 from './images/thumbnail.png'
import project6 from './images/madmanrun.png'

const Projects = () => (

<div id="slider">

<div id="project1">
    <span id="info_about_desktop">[desktop only!]</span>
    <a className="gamejolt" href="https://gamejolt.com/games/fnad0-1alpha/601491">[gamejolt]</a>
    <div id="glitch_effect"></div>
    <img id="prj1" src={project1} alt="prj1"></img>
</div>
<div id="project2">
    <span id="info">mini app's</span>
</div>
<div id="project3">
    <span id="info">[coming soon]</span>
</div>
<div id="project4">
    <span id="info">[coming soon]</span>
</div>
<div id="project5">
    <span id="info">[coming soon]</span>
</div>
<div id="project6">
    <span id="info">madmanrun.pl</span>
    <img id="prj6" src={project6} alt="prj6"></img>
    <a className="madmanrun_website" href="http://madmanrun.pl/">[click here to see website]</a>
</div>

</div>

)

export default Projects