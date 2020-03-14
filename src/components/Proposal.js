

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Form, Card} from 'react-bootstrap'


class Proposal extends Component {
    state={ 
        idea: '', 
        skillsNeeded: [], 
        Platform: {}, 
        Field: {},
        Language: {}
    }
    handleChange =(event) => { 
        
        let id = event.target.id
        let value = event.target.value
        this.setState({[id]: value })
    }
    handleSkills= skill => { 
        let id = skill.category
        let value = skill.name
        this.setState({[id]: value})
        if(!this.state.skillsNeeded.includes(skill.id)){ 
        let newArray =[].concat(this.state.skillsNeeded)
        this.setState({skillsNeeded: [...newArray, skill]})
        }
        else { 
            alert("You already added this skill!")
        }
        } 

      handleSubmit = e => { 
          const idea = `I want to make a ${this.state.Platform} based in ${this.state.Field} that will ${this.state.idea}`
          const user = this.props.user.id
          debugger
          e.preventDefault()
          fetch('http://localhost:3000/proposals', { 
              method: "POST", 
              headers: {
                "Content-Type" : 
                "application/json",
                Accept:"application/json"
              }, 
              body: JSON.stringify({idea: idea, client:user } )
          })
          .then (res => res.json())
          .then( proposal => console.log(proposal))
      }  
    render() {
        
        const platforms = this.props.skills.filter(skill => skill.category ==="Platform")
        const field = this.props.skills.filter(skill => skill.category ==="Field")
        const language = this.props.skills.filter(skill => skill.category ==="Language")
        
        return (
            <div>
                  <Card className="form-card">
                    <Card.Body>
                    <Card.Title as="h3"className="text-center"></Card.Title>
                        <Form>
                            <Form.Group controlId="Proposals">
                            <Form.Label>I want to make a</Form.Label>
                            <br></br>
                             {platforms.map(skill => <Form.Check inline label={skill.name} type={"radio"} onClick={ () => this.handleSkills(skill)} />)}
                             <br></br>
                            <Form.Label>Based in </Form.Label>
                            <br></br>
                            {field.map(skill => <Form.Check inline label={skill.name} type={"radio"} onClick={ () => this.handleSkills(skill)} />)}
                            <br></br>
                            <Form.Label>That will...</Form.Label>
                               <textarea
                                className="form-control"
                                type="text"
                                placeholder="Tell us what your app will do!"
                                id="idea"
                                value={this.state.idea}
                                onChange={(event) => this.handleChange(event)}
                            />
                            </Form.Group>
                            
                            <Form.Group>
                                <Button variant="primary" size="lg" block
                                    type="submit"
                                    onClick={(event) => this.handleSubmit(event)}>
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

const mapStateToProps = (state) => {
    
      return { skills: state.skills, user:state.user }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Proposal)
