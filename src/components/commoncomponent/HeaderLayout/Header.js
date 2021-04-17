import React from 'react'
import Untitled from "../../../assets/images/Untitled-1.png"
import help from "../../../assets/images/icon--help.png"
import setting from "../../../assets/images/icon-setting.png"
import logout from "../../../assets/images/icon-logout.png"
import search from "../../../assets/images/search-btn.png"
import dropdownsearch from "../../../assets/images/dropdown-cross-btn.png"
import logo from "../../../assets/images/logo.png"
import alert from "../../../assets/images/alert-icon.png"
import userimages from "../../../assets/images/icon-user.png"
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { CgMenuLeft } from "react-icons/cg";
import Sidebar from '../Sidebar/Sidebar'


 export const Header = () => {    

  return (
    <>
            {/* our html here */}
            <nav className="navbar navbar-expand-lg navbar-light shadow" style={{"background":"#ffffff"}}>
  <div className="container-fluid"> <a id="sidebarCollapse"><Sidebar /> </a> <a href="/"> <img src={logo} alt="logo" /> </a>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="form-inline my-2 my-lg-0 ml-auto search-form">
        <input className="form-control mr-sm-2 ml-auto" type="search" placeholder="Search" aria-label="Search..." />
        <button className="search-btn my-2 my-sm-0" type="submit"> <img src={search} alt="pic" /> </button>
      </form>
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item active dropdown "> <a className="nav-link dropdown-toggle"    aria-haspopup="true" aria-expanded="false"> <img src={dropdownsearch} alt="pic" /> </a> 
          <div className="dropdown-menu createdropdown" aria-labelledby="dropdownMenuLink">
            <ul className="list-unstyled create-list">
              <li><h4>Create</h4></li>
              <li>
                <h4 data-toggle="modal" data-target="#createTopic">Topic</h4>
                <p>Create a topic of interest</p>
              </li>
              <li>
                <h4 data-toggle="modal" data-target="#createPost">Post</h4>
                <p>Share a post on your OneMic feed</p>
              </li>
            </ul>
          </div>
          {/*//*/} 
        </li>
        <li className="nav-item active"> <a className="nav-link" href="#"><img src={alert} alt="img" /></a> </li>
        {/* User */}
        <li className="nav-item border-none dropdown"> <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={userimages} alt="pic" /></a>&nbsp;&nbsp; 
          {/* User Dropdown */}
          <div className="dropdown-menu userdropdown" aria-labelledby="dropdownMenuLink"> 
            <h5><img src="images/icon-user.png" /> &nbsp;&nbsp;My Station</h5>
            <ul className="list-unstyled">
              <li><a href="#"><img 
              
              alt />&nbsp;&nbsp;FAQ'S </a></li>
              <li><a href="#"><img src={help} alt="pic"  />&nbsp;&nbsp;Help &amp; Support </a></li>
              <li><a href="#"><img src={setting} alt />&nbsp;&nbsp;User Setting </a></li>
              <li><a href="#"><img src={logout} alt />&nbsp;&nbsp;Logout </a></li>
            </ul> 
          </div>
          {/*//*/}
        </li>
        <li className="nav-item "> <a className="prm-btn btn nav-item mt-2 btn-round">UPGRADE</a> </li>
      </ul>
    </div>
  </div>
</nav>  
</>
  );
}
