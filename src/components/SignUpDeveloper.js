import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Form, Card, DropdownButton, Dropdown} from 'react-bootstrap'

class SignUpDeveloper extends Component  {
    state= { 
        mySkills: [],
        username: '', 
        password: '', 
        name: '', 
        bio: ''
    }

    handleChange =(event) => { 
        let id = event.target.id
        let value = event.target.value
        this.setState({[id]: value })
    }
    handleSkills= skill => { 
        if(!this.state.mySkills.includes(skill)){ 
        let newArray =[].concat(this.state.mySkills)
        this.setState({mySkills: [...newArray, skill.id]})
        }
        else { 
            alert("You already added this skill!")
        }
        } 

    addUser = e => { 
        e.preventDefault()
        const{name, bio, password, username} = this.state
        fetch('https://')
    }
    render(){ 
        
        return (
            <div>
                <Card className="form-card">
                    <Card.Body>
                    <Card.Title as="h3"className="text-center">Create Your Account</Card.Title>
                        <Form>
                            <Form.Group controlId="Username">
                            <Form.Label>Username</Form.Label>
                            <input 
                                className="form-control"
                                type="text"
                                placeholder="UserName..."
                                value={this.state.username}
                                id="username"
                                onChange={(event) =>this.handleChange(event)}
                            />
                            <Form.Label>Name</Form.Label>
                            <input 
                                className="form-control"
                                type="text"
                                placeholder="Enter your name!"
                                value={this.state.name}
                                id="name"
                                onChange={(event) =>this.handleChange(event)}
                            />
                            <Form.Label>Password</Form.Label>
                            <input 
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                id="password"
                                onChange={(event) =>this.handleChange(event)}
                            />
                            {/* <DropdownButton id="dropdown-basic-button" title="Skills">{ 
                            this.props.skills.map(skill =>  <Dropdown.Item onClick={ () => this.handleSkills(skill)}>{skill.name}</Dropdown.Item>)
                            }
                            </DropdownButton> */}
                            {this.props.skills.map(skill => <Form.Check inline label={skill.name} type={"radio"} onClick={ () => this.handleSkills(skill)} />)}
                            <br></br>
                            <Form.Label>About Me</Form.Label>
                            <textarea
                                className="form-control"
                                type="text"
                                placeholder="Write a nice summary about yourself!"
                                id="bio"
                                value={this.state.nio}
                                onChange={this.handleChange}
                            />
                            </Form.Group>
                            
                            <Form.Group>
                                <Button variant="primary" size="lg" block
                                    type="submit"
                                    onClick={(event) => this.addUser(event)}>
                                        Submit
                                </Button>
                            </Form.Group>
                        </Form>
                        </Card.Body>
                    </Card>
            </div>
        )
        } 
}

const mapStateToProps = (state) => ({
    skills: state.skills 
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpDeveloper)
