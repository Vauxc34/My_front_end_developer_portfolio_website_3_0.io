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
        <p className="desc">BEGINNER FRONT END PROGRAMIST AND STUDENT LIVING IN A SMALL VILLAGE IN POLAND. WHO STARTED IN 2014 WRITING SOME BASIC GAMES IN THE GAMES FACTORY 2 AND MULTIMEDIA FUSION 2. CURRENTLY I HAVE 18 YEAR'S OLD AND I STARTING THIS JOURNEY WITH PROGRAMMING AGAIN</p>
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