import React from 'react';

const Card = ({number}) => <div className="card-carousel">
   <div class="item">

   <div class="card">
    <div class="card-header">
    <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i> 
    </div>
    <div class="card-body">
       <h4>Amazing App!</h4>
                     <p>"Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod consectetur adipisicing consectetur sit amet."</p></div> 
    <div class="card-footer">
    <div className="media d-flex text-left">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>               
             </div>
             </div>
            
           </div>
    </div>
  </div>
                  
               </div>
</div> 

export default Card