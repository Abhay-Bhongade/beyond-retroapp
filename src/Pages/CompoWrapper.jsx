import React from 'react'
import Delivery from './Delivery'
import Twenty from './Twenty'
import Blog from './Blog'
import Footer from './Footer'
import Navbar from './Navbar'
import Carousal from './Carousal'
import CarousalData from './CarousalData'

const CompoWrapper = () => {
    return (
        <>
            <Navbar />
            <Delivery />
            <Carousal slides={CarousalData} />
            <Twenty />
            <Blog />
            <Footer />
        </>
    )
}

export default CompoWrapper