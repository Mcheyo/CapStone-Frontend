import React from "react"
import {Link, Navlink, withRouter} from "react-router-dom"
import {Navbar} from 'react-bootstrap'

const NavbarComponent = () =>{ 
    return( 
        <div>
    <Navbar bg="light">
             <Navbar.Brand href="/">Home</Navbar.Brand>
     </Navbar>
        </div>
    )
}

export default NavbarComponent