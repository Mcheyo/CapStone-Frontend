import React from "react"
import {Link, Navlink, withRouter} from "react-router-dom"
import {Navbar} from 'react-bootstrap'

const NavbarComponent = () =>{ 
    return( 
        <div className="Navbar">
    <Navbar >
             <Navbar.Brand href="/">Home</Navbar.Brand>
             <Navbar.Brand href="/profile">Profile</Navbar.Brand>
             <Navbar.Brand href="/login">Login</Navbar.Brand>
     </Navbar>
        </div>
    )
}

export default NavbarComponent