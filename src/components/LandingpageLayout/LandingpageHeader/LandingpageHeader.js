import React from 'react'
import {Navbar,Nav,Form,Button} from "react-bootstrap"
import "./landfingheader.scss"
import logo from "../../../assets/images/logo.png"   

export const LandingpageHeader = () => {
    return (
       <>
    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home"> <img src={logo} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/"className="text-light" >Home</Nav.Link>
      <Nav.Link href="/" className="text-light">Contact</Nav.Link>
      <Nav.Link href="/"className="btn_header_landing ml-1 " >signup</Nav.Link>



    </Nav>
   
  </Navbar.Collapse>
</Navbar>
       </>
    )
}


