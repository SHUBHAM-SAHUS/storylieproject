import { Header } from 'components/commoncomponent/HeaderLayout/Header'
import React from 'react'

const PostDetails = () => {
    return (
        <div>
            
            <section>
  {/* Section Body */}
  <div className="section-body mb-3">
    <div className="article">
      {/* Media */}
      <div className="media p-3"> <img src="images/author1.jpg" alt="John Doe" className="mr-3 rounded-circle" style={{width: 86}} />
        <div className="media-body">
          <div className="article-title">
            <h5>Why Colleges now imposing uniforms? <a href="#" className="btn btn-round prm-btn font-12 mr-2 float-right">Follow</a> </h5>
          </div>
          <div className="article-body">
            <h5>I Totally agree <a className="btn btn-outline-primary btn-round font-12 float-right create-post"> &nbsp; Create Post</a> </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small>more...</small></a></p>
            <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
            {/**/}
            <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> English </a> </div>
            {/*//*/}
            <img src="images/voice-image.jpg" className="img-fluid mb-4" />
            <div className="popup-images justify-content-start"> <a href="#" className="m-1"> <img src="images/widget-1.jpg" className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src="images/widget-2.jpg" className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src="images/widget-3.jpg" className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src="images/widget-4.jpg" className="brd-rounded5 mb-2" /> </a> </div>
          </div>
        </div>
      </div>
      {/*//*/}
      {/* Comments */}
      <div className="comment p-3 mt-2 mb-3">
        <ul className="list-unstyled coments-use">
          <li> <a href="#" className="comment"><img src="images/icon-like.png" /></a> <span className="total">1 K</span> </li>
          <li> <a href="#" className="comment"><img src="images/icon-dislike.png" /></a> <span className="total">15</span> </li>
          <li> <a href="#"> <img src="images/icon-comment.png" /> </a> <span className="total">32</span> </li>
          <li> <a href="#" className="comment"><img src="images/icon-forward.png" /></a> <span className="total">20</span> </li>
          <li> <a href="#" className="comment"><img src="images/icon-pin.png" /></a> <span className="total">08</span> </li>
          <li className="border-none" data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src="images/icon-flag.png" /></a> <span className="total">01</span> </li>
          <li className="float-right" data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src="images/icon-music.png" /> <span className="total">Add to playlist</span> </a></li>
        </ul>
      </div>
      {/*//*/}
    </div>
  </div>
  {/*//*/}       
</section>
        </div>
    )
}

export default PostDetails
