import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Form, Card} from "react-bootstrap"
import {Link} from "react-router-dom"


export class Login extends Component {
    state = { 
        name: "", 
        password: ""
    }
    handleLoginSubmit = (e) => { 
        e.preventDefault()
        let params = this.state
        fetch('http://localhost:3000/login',{ 
            method: "POST", 
            headers: {
                "Content-Type" :"application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                name: params.name
            })
        })
        .then(res => res.json())
        .then()
    }
    render() {
        return (
            <div className="form-group"> 
            <Card className="form-card">
            <Form onSubmit={this.handleLoginSubmit}>
                <Form.Group controlId="Username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username"
                    placeholder="Enter username"  
                    name="name"
                    onChange={(event) => this.handleChange(event)}
                    />
                </Form.Group>

                {/* <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        label="password"
                        placeholder="password"
                        name="password"
                        onChange={(event) => this.handleChange(event)}
                        // value={this.state.password}
                    /> */}
                    <Form.Text className="text">
                        Not a Member? <Link to='/signup'>
                        Sign up here
                            </Link>
                    </Form.Text>
                {/* </Form.Group> */}

                <Form.Group controlId="submit">
                    <Button variant="primary" type="submit" size="lg" block>
                    Submit
                    </Button>
                </Form.Group>
            </Form>
            </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
