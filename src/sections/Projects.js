import React from 'react'
import './sections_style/Projects.css'
import project5 from './images/dewocjonalia.png'
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
    <a className="madmanrun_website" href="https://vauxc34.github.io/checkers_alpha1.io/">[play! (PC only)]</a>
    <div id="prj2"></div>
</div>
<div id="project3">
    <span id="info">mini app's</span>
    <a className="madmanrun_website" href="https://vauxc34.github.io/mini-apps.io/">[check]</a>
    <div id="prj3"></div>
    
</div>
<div id="project4">
    <span id="info">[coming soon]</span>
    <a className="madmanrun_website" href="#">[click here to see more]</a>
</div>
<div id="project5">
    <span id="info">ichtys-dewocjonalnia.pl</span>
    <img id="prj5" src={project5} alt="prj5"></img>
    <a className="madmanrun_website" href="https://ichtys-dewocjonalia.pl/">[click here to see website]</a>
</div>
<div id="project6">
    <span id="info">apmira.site</span>
    <img id="prj6" src={project6} alt="prj6"></img>
    <a className="madmanrun_website" href="http://apmira.site/">[click here to see website]</a>
</div>

</div>

)

export default Projects