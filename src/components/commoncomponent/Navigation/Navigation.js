import React from 'react'
import {Navbar,NavDropdown,Nav} from "react-bootstrap"
import logo from "../../../assets/images/logo.png"
import "./navigation.scss"
import {FaRegUser} from "react-icons/fa"
  export const Navigation = () => {
    return (
        <div className="">

<Navbar collapseOnSelect expand="lg"  className="shadow">
  <Navbar.Brand href="#home"> <img src={logo} alt="logo"/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
  
    <NavDropdown title={<FaRegUser/>} id="collasible-nav-dropdown">

<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
      <Nav.Link href="#pricing">Pricing</Nav.Link>

      <NavDropdown title={<FaRegUser/>} id="collasible-nav-dropdown">

        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <button className="rm-btn">upgrADE</button>
  </Navbar.Collapse>
</Navbar>


            
        </div>
    )
}


