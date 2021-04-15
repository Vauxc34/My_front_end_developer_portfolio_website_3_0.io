import React from 'react'
import './sections_style/Information.css'
import knowledge from '../sections/images/knowledge.png'
import working_man from '../sections/images/working_man.png'

/* skill's */

import html5 from '../sections/images/HTML5.png'
import css3 from '../sections/images/CSS3.png'
import js6 from '../sections/images/JS6.png'
import sassscss from '../sections/images/SASS.png'

/* */

const Information = () => (

<div id="information">

    <div id="skills1">
        <img id="working_man" src={working_man} alt="working_man"></img>
        <div id="about_me">

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
            
        

        </div>
        <div id="skill6">

        

        </div>
        <h4>my actual skills</h4>
        </div>
    </div>

</div>

)

export default Information