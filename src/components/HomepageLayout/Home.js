import React from 'react'


import { SponcerLayout } from './SpocencerdContent/SponcerLayout'
import { UserPostLayout } from './UserpostLayout/UserPostLayout'
import { SocialFeedBack } from './SocialFeedback/SocialFeedBack'
import { Carousel } from 'react-bootstrap'
import { CarouselLayout } from './CarouselLayout/CarouselLayout'

const Home = () => {
    return (
        <div>
            <div className="px-3">
                <div className="row no-gutters">
                    <div className ="col-md-8">
                  <CarouselLayout/>
                    <UserPostLayout/>
            <SponcerLayout/> 
            <SocialFeedBack/>
            
                    </div>
                    <div className="col-md-4">

                    </div>


                </div>


                </div>


           
        </div>
    )
}

export default Home
