import React from 'react'
import { SponcerLayout } from './SpocencerdContent/SponcerLayout'
import { UserPostLayout } from './UserpostLayout/UserPostLayout'
import { SocialFeedBack } from './SocialFeedback/SocialFeedBack'
import { Carousel } from 'react-bootstrap'
import { CarouselLayout } from './CarouselLayout/CarouselLayout'
import SidebarDetails from './SisebarDetails/SidebarDetails'
import { InviteCard } from './InviteCard/InviteCard'
import { SideAdvertisement } from './Sisebaraddvertisement/SideAdvertisement'

 export const Home = () => {
    return (
        <div>
            <div className="mt-5">
                <div className="row no-gutters">
                    <div className ="col-md-9">
                  {/* <CarouselLayout/> */}
                    <UserPostLayout/>
            {/* <SponcerLayout/>  */}
            <SocialFeedBack/>
            
                    </div>
                    <div className="col-md-3">
                    <SidebarDetails/>
                    {/* <InviteCard/>
                    <SideAdvertisement/> */}
                    </div>


                </div>


                </div>


           
        </div>
    )
}

export default Home
