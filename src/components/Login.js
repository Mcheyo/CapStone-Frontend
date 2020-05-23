import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Form, Card} from "react-bootstrap"
import {Link} from "react-router-dom"

export class Login extends Component {
    render() {
        return (
            <div>
                Adding Login Page
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
