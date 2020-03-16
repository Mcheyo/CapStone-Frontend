import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setUser} from '../redux/actions'
import {Button, Form, Card} from 'react-bootstrap'
import {Redirect, Link} from 'react-router-dom'



class SignUpClient extends Component {
  state={ 
      name: '', 
      username: '', 
      password: '', 
      bio: '',
      redirect: false 

  }
  handleChange =(event) => { 
    let id = event.target.id
    let value = event.target.value
    this.setState({[id]: value })
}
addUser = e => { 
    e.preventDefault()
    const{name, bio, password, username} = this.state
    fetch('http://localhost:3000/users',{ 
        method: "POST", 
        headers: {
              "Content-Type" : 
              "application/json",
              Accept:"application/json"
            }, 
            body: JSON.stringify({name:`${name}`, bio:`${bio}`, password:`${password}`, username:`${username}`  })
         })
         .then( res => res.json())
         .then(user =>{  
            if(user.message){ 
                user.message.forEach(mes => alert(mes))
            }
            else{  
                this.props.onFetch(user)
                this.setState({redirect: true})
            }
            })
}
  
    render(){ 
        if(this.state.redirect){ 
            return <Redirect to="/profile"/>
        }
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => {
    return { 
        onFetch: (userObj) => dispatch(setUser(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpClient)
