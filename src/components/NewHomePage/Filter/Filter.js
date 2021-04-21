import React from 'react'
import './filter.scss'
import filterIcon from 'assets/images/filter-icon.png'

const Filter = () => {
    return (

        <div className="section-header">
            
            <h2 className="sec-heading float-left"> All Topics</h2>
            <div className="dropdown float-right">
                <button className="btn filter-btn dropdown-toggle" type="button" data-toggle="dropdown">
                    <img src={filterIcon} alt /> &nbsp;&nbsp;<strong>Filter</strong>  &nbsp;&nbsp;&nbsp;&nbsp;{/* <i class="fa fa-angle-down" aria-hidden="true"></i> */}
                </button>
                {/**/}
                <div className="dropdown-menu filterdropdown" aria-labelledby="dropdownMenuLink">
                    <ul className="list-unstyled">
                        {/* <li><a className="dropdown-item" href="#"><img src="images/filter-all.png" alt />&nbsp;&nbsp;&nbsp; All </a> </li>
                        <li><a className="dropdown-item" href="#"><img src="images/filter-followed.png" alt />&nbsp;&nbsp;&nbsp; Followed </a></li>
                        <li><a className="dropdown-item" href="#"><img src="images/filter-hot.png" alt />&nbsp;&nbsp;&nbsp; Hot </a></li>
                        <li><a className="dropdown-item" href="#"><img src="images/filter-recent.png" alt />&nbsp;&nbsp;&nbsp; Recent </a></li> */}
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Filter
