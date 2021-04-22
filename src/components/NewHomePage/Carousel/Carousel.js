import React from 'react'
import './carousel.scss'
import { OwlCarouselOne } from '../Carousel/OwlCarousel/OwlCarousel'


const Carousel = () => {
    

    return (
        <section>
            <div class="section-header">
                <h2 class="sec-heading float-left">Newly Added Topics</h2>
                <small class="float-right"> <a href="#">View all</a> </small>
                <div className="owl-item active" >
                    <OwlCarouselOne/>
                </div>
            </div>
        </section>

    )
}

export default Carousel
