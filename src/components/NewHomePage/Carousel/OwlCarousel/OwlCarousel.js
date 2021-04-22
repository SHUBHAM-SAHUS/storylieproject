import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './owlCarousel.scss'
import image1 from 'assets/images/image-1.jpg'

export const OwlCarouselOne = () => {
    return (
        <div>
            <div class='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >

                </div>
            </div>
            <div class='container-fluid' >
                <OwlCarousel items={3}
                    className="owl-theme"
                    loop={true}
                    dots={false}
                    nav={false}
                    autoPlay={true}
                    smartSpeed={3000}
                    autoplayTimeout={7000}
                    margin={8}
                     >

                    <div className="item bg-white">
                        <div className="media p-3"> <img src={image1} alt="John Doe" className="mr-3 rounded" style={{ width: 150 }} />
                            <div className="media-body">
                                <h5>What weird food combinations do you really enjoy?</h5>
                                <p className="author">Created by <a href="#">John_deo</a></p>
                                <div style={{ width: '100%' }}> <a href="#" className="btn btn-round prm-btn font-12 mr-1 float-left">Follow</a>
                                    <button type="button" className="float-left btn-outline-primary create-post btn btn-round font-12" data-toggle="modal" data-target="#createPost"> Create Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}
