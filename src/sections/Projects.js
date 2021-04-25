import React from 'react'
import './sections_style/Projects.css'

import project1 from './images/thumbnail.png'
import project3 from './images/checkers.png'
import project2 from './images/mini_apps.png'
import project6 from './images/madmanrun.png'

const Projects = () => (

<div id="slider">

<div id="project1">
    <span id="info_about_desktop">five night's at doge</span>
    <a className="gamejolt" href="https://gamejolt.com/games/fnad0-1alpha/601491">[gamejolt]</a>
    <div id="glitch_effect"></div>
    <div id="prj1"></div>
</div>
<div id="project2">
    <span id="info">checker's</span>
    <a className="madmanrun_website" href="https://github.com/Vauxc34/checkers_alpha1/">[github]</a>
    <div id="prj2"></div>
</div>
<div id="project3">
    <span id="info">mini app's</span>
    <a className="madmanrun_website" href="https://github.com/Vauxc34?tab=repositories">[github]</a>
    <img id="prj2" src={project2} alt="prj2"></img>
    
</div>
<div id="project4">
    <span id="info">[coming soon]</span>
    <a className="madmanrun_website" href="#">[click here to see more]</a>
</div>
<div id="project5">
    <span id="info">[coming soon]</span>
    <a className="madmanrun_website" href="#">[click here to see more]</a>
</div>
<div id="project6">
    <span id="info">madmanrun.pl</span>
    <img id="prj6" src={project6} alt="prj6"></img>
    <a className="madmanrun_website" href="http://admanrun.pl/">[click here to see website]</a>
</div>

</div>

)

export default Projects