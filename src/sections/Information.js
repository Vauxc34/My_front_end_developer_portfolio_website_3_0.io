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

const DescriptionBox = styled.div`
position:relative;
display:flex;
justify-content:center;
height:100%;
width:90%;



`

const Description = styled.span`
position:relative;
  background: transparent;
  color: black;
  font-family:Arial;
  font-size:2.5vh;
  text-transform:none;
  text-align:justify;


  @media (max-width:280px) {

    font-size:15px;
  }

  @media (min-width:600px) {

    font-size:15px;
  }

  @media (min-width:768px) {

    font-size:32px;
  }

  @media (min-width:1024px) {

    font-size:28px;
  }

  @media (min-height:1366px) {

    font-size:45px;
  }

  
  @media (min-width:1439px) {

    font-size:50px;
  }


`

const PartnerBox = styled.div`
display:flex
flex-direction:column;
position:absolute;
bottom: 25px;
height:155px;
width:100%;
background:linear-gradient(#ff0000, #fc5858);

@media (min-width:599px) {

  height:205px;

}

@media (min-width:599px) and (orientation:landscape) {
  bottom:10px;
  height:75px;

}

@media (min-width:991px) {

  height:255px;

}

`

const Container_of_title_partner_section = styled.div`
display:flex;
justify-content:center;
align-self:flex-start;
position:relative;
width:100%;
height:30%;

@media (min-width:599px) {

  height:35%;

}

@media (min-width:767px) {

  height:40%;

}



`

const Container_of__partner_section = styled.div`
display:flex;
justify-content:center;
align-self:flex-end;
position:relative;
width:100%;
height:70%;

@media (min-width:599px) {

  height:60%;

}

@media (min-width:599px) and (orientation:landscape) {
  height:50%;

}

@media (min-width:767px) {

  height:60%;

}


`

const PartnerTitle = styled.h2`
color: white;
  font-family:'Merriweather';
  margin:5px;
  font-size:26px;
  z-index:2;

  @media (min-width:599px) {
    
  margin:10px;
   font-size:50px
  
  }

  @media (min-width:599px) and (orientation:landscape) {
    margin:5px;
   font-size:15px
  
  }

  @media (min-width:991px) {
    margin:15px;
    font-size:65px
  
  }
  
  


`

const Partnerlink = styled.a`
color: white;
font-family:'Arial';
font-size:24px;
text-align:center;
&:hover {

  font-size:24px; 

}

  @media (min-width:599px) {
    

  
  }

  @media (min-width:599px) and (orientation:landscape) {
   
  
  }

  @media (min-width:991px) {
    
  
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
        <DescriptionBox>
        <Description>Beginner front end programist and Student living in a small village in Poland. who started in 2014 writing some basic games in The Games Factory 2 Multimedia Fusion 2. Currently i have 18 year's old and i starting this journey with programming again. Creativity and beign helpful is my strong side.</Description>
        </DescriptionBox>
        </div>
        
        </div>

        <PartnerBox>
        <Container_of_title_partner_section>
        <PartnerTitle>I collaborate with</PartnerTitle>  
        </ Container_of_title_partner_section>
        <Container_of__partner_section>
        < div className="Partnerguy__one"><Partnerlink href="https://google.pl">Kliknij</Partnerlink></div>
        </Container_of__partner_section>
        </PartnerBox>
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