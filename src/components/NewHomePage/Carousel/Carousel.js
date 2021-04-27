import React from 'react'
import './carousel.scss'
import { OwlCarouselOne } from '../Carousel/OwlCarousel/OwlCarousel'


const Carousel = () => {
    

    return (
        <section>
            <div className="section-header">
                <h2 className="sec-heading float-left">Newly Added Topics</h2>
                <small className="float-right"> <a href="#">View all</a> </small>
                <div className="" >
                    <OwlCarouselOne/>
                </div>
            </div>
        </section>

    )
}

export default Carousel
