import React from 'react'
import './sections_style/Information.css'
import knowledge from '../sections/images/knowledge.png'
import styled from 'styled-components'


/* skill's */

import html5 from '../sections/images/HTML5.png'
import css3 from '../sections/images/CSS3.png'
import js6 from '../sections/images/JS6.png'
import wordpress_logo from '../sections/images/Wordpress_Blue_logo.png'
import sassscss from '../sections/images/SASS.png'
import react from '../sections/images/react.png'
import git from '../sections/images/git.png'

/* */

const Circle = styled.div`
position:absolute;
top:5%;
left:79%;
height:100px;
width:100px;
border-radius:50%;
background:white;

@media (max-width:768px) {

  left:65%;

}

`

const MainTitle = styled.h1`
  color: white;
  font-family:'Merriweather';
  font-size:66px;
  margin-left:20px;
  z-index:2;

  @media (max-width:768px) {

    font-size:28px;
  }


`

const Description = styled.p`
position:relative;
  background: transparent;
  color: white;
  font-family:Arial;
  font-size:3.1vh;


@media (min-width:640px) {

  font-size:4vh;

}

`

const Information = () => (

<div id="information">

    <div id="skills1">
        
        <div id="about_me">

        <div id="widget__one">
        <MainTitle>Who am i?</MainTitle>
        <Circle>
          <div className="avatar"></div>
        </Circle>
        </div>
        
        <div id="widget__two_with_description">
        <Description>Beginner front end programist and Student living in a small village in Poland. who started in 2014 writing some basic games in The Games Factory 2 Multimedia Fusion 2. Currently i have 18 year's old and i starting this journey with programming again. Creativity and beign helpful is my strong side.</Description>
        </div>
        
        </div>
    </div>
    <div id="skills2">
        <img id="knowledge" src={knowledge} alt="knowledge"></img>
        <div id="actual_skills">
        <div id="container___one">

        <div id="skill1">
        
        <img id="html5" src={html5}></img>
        <span className="html5_name">html5</span>
        </div>
        <div id="skill2">

        <img id="css3" src={css3}></img>
        <span className="css3_name">css3</span>
        </div>
        <div id="skill3">
         
        <img id="js6" src={js6}></img>
        <span className="js6_name">javascript</span>
        </div>


        </div>

        <div id="container___two">

        <div id="skill_wordpress">
         
         <img id="wordpress_log" src={wordpress_logo}></img>
         <span className="wordpress_name">wordpress</span>
         </div>

        </div>
        
        <div id="container__three">

        <div id="skill4">
        
        <img id="sassscss" src={sassscss}></img>
        <span className="sassscss_name">sass/scss</span>
        </div>
        <div id="skill5">
            
        <img id="react" src={react}></img>
        <span className="react_name">react</span>
        </div>
        <div id="skill6">

        <img id="git" src={git}></img>
        <span className="git_name">git</span>
        </div>

        </div>
       
        <h4>my actual skills</h4>
        </div>
    </div>

</div>

)

export default Information