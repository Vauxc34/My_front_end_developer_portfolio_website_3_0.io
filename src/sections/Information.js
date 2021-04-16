import React from 'react'
import './sections_style/Information.css'
import knowledge from '../sections/images/knowledge.png'
import working_man from '../sections/images/working_man.png'
import mountain_graph from '../sections/images/mountain_graph.jpg'

/* skill's */

import html5 from '../sections/images/HTML5.png'
import css3 from '../sections/images/CSS3.png'
import js6 from '../sections/images/JS6.png'
import sassscss from '../sections/images/SASS.png'
import react from '../sections/images/react.png'
import git from '../sections/images/git.png'

/* */

const Information = () => (

<div id="information">

    <div id="skills1">
        <img id="mountain_graph" src={mountain_graph} alt="mountain_graph"></img>
        <div id="about_me">
        <img id="working_man" src={working_man} alt="working_man"></img>
        <h5>about me</h5>
        <p className="desc">Beginner front end programist and Student living in a small village in <span className="pol_red">Pol</span><span className="pol_white">and</span>. who started in 2014 writing some basic games in <span className="tgf2_yellow">The Games</span> <span className="tgf2_red">Factory 2<br></br></span> and <span className="mmf2_blue">Multimedia</span> <span className="mmf2_red">Fusion 2</span>. Currently i have 18 year's old and i starting this journey with <span className="programming">programming </span>again</p>
        <div id="description">
        </div>
        </div>
    </div>
    <div id="skills2">
        <img id="knowledge" src={knowledge} alt="knowledge"></img>
        <div id="actual_skills">
        <div id="skill1">
        
        <img id="html5" src={html5}></img>

        </div>
        <div id="skill2">

        <img id="css3" src={css3}></img>

        </div>
        <div id="skill3">
         
        <img id="js6" src={js6}></img>

        </div>
        <div id="skill4">
            
        <img id="sassscss" src={sassscss}></img>

        </div>
        <div id="skill5">
            
        <img id="react" src={react}></img>

        </div>
        <div id="skill6">

        <img id="git" src={git}></img>

        </div>
        <h4>my actual skills</h4>
        </div>
    </div>

</div>

)

export default Information