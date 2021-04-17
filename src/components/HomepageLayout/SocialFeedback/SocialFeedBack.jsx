import React from 'react'
import iconlike from "../../../assets/images/icon-like.png"
import icondislike from "../../../assets/images/icon-dislike.png"
import iconcomment from "../../../assets/images/icon-comment.png"
import iconforword from "../../../assets/images/icon-forward.png"
import iconpin from "../../../assets/images/icon-pin.png"
import flagicon from "../../../assets/images/icon-flag.png"
import musicicon from "../../../assets/images/icon-music.png"
import "./socialfeedback.scss"


 export const SocialFeedBack = () => {
    return (
        <>

          
     
            <div className="comment p-3 mt-2 mb-3">
      <ul className="list-unstyled coments-use ">
        <li> <a href="#" className="comment"><img src={iconlike} alt="iconlike" /></a> <span className="total">1 K</span> </li>
        <li> <a href="#" className="comment"><img src={icondislike} from alt="dislike" /></a> <span className="total">15</span> </li>
        <li> <a href="#"> <img src={iconcomment} alt="comment" /> <sup><span className="locked alert-bg"><img src="images/lock-icon.png" /></span></sup> </a> <span className="total">32</span> </li>
        <li> <a href="#" className="comment"><img src={iconforword}  alt="forword"/></a> <span className="total">20</span> </li>
        <li> <a href="#" className="comment"><img src={iconpin} alt="pinicon" /></a> <span className="total">08</span> </li>
        <li className="border-none" data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src={flagicon} alt="flag" /></a> <span className="total">01</span> </li>
        <li className="float-right" data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src={musicicon}  alt="iconmusic"/> <span className="total">Add to playlist</span> </a></li>
      </ul>
    </div>  
    

        </>
            
        
    )
}


