import React from 'react'
import './sections_style/Website.css';
// import './images/wrapper.jpg'

import Heading from './Heading'
import Projects from './Projects'
import Information from './Information'
import Footer from './Footer'

const Website = () => (

    <div className="wrapper">
        <div id="start_box">
        <h1>wiktor wyrostek front end developer</h1>
        </div>
        <Heading />
        <Projects />
        <Information />
        <Footer />
    </div>

)

export default Website;
