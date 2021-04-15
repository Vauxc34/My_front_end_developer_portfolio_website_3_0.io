import React from 'react'
import './sections_style/Website.css';

import Heading from './Heading'
import Slider from './Slider'
import Information from './Information'
import Footer from './Footer'

const Website = () => (

    <div className="wrapper">
        <Heading />
        <Slider />
        <Information />
        <Footer />
    </div>

)

export default Website;
