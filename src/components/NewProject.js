

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button, Form, Card} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import {getProject, addProject} from '../redux/actions'


class NewProject extends Component {
    state={ 
        idea: '', 
        skillsNeeded: [], 
        Platform: {}, 
        Field: {},
        Language: {}, 
        name: '', 
        redirect: false
    }
    handleChange =(event) => { 
        
        let id = event.target.id
        let value = event.target.value
        this.setState({[id]: value })
    }
    handleSkills= skill => { 
        let id = skill.category
        let value = skill
        this.setState({[id]: value})
        if(!this.state.skillsNeeded.includes(skill.id)){ 
        let newArray =[].concat(this.state.skillsNeeded)
        this.setState({skillsNeeded: [...newArray, skill.id]})
        }
        else { 
            alert("You already added this skill!")
        }
        } 

      handleSubmit = e => { 
          const idea = `I want to make a ${this.state.Platform.name} based in ${this.state.Field.name} that will ${this.state.idea}`
          const user = this.props.user.id
          const {skillsNeeded, name} = this.state
          
          e.preventDefault()
          fetch('http://localhost:3000/projects', { 
              method: "POST", 
              headers: {
                "Content-Type" : 
                "application/json",
                Accept:"application/json"
              }, 
              body: JSON.stringify({idea: idea, client:user, skills:skillsNeeded, name:name} )
          })
          .then (res => res.json())
          .then( data => { 
            if(data.message){ 
                data.message.forEach(mes => alert(mes))
            }
              else {
            console.log(data)
              this.props.setProject(data)
              this.setState({redirect: true})
              }
          })
      }  
    render() {
        
        const platforms = this.props.skills.filter(skill => skill.category ==="Platform")
        const field = this.props.skills.filter(skill => skill.category ==="Field")
        // const language = this.props.skills.filter(skill => skill.category ==="Language")
        if(this.state.redirect){ 
            
            let id = this.props.project.find(project => project.name === this.state.name).id 
            return <Redirect to={`/project/${id}`}/>
        }
        
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
                            <Form.Label>That is called</Form.Label>
                               <input
                                className="form-control"
                                type="text"
                                placeholder="Give your project a name!"
                                id="name"
                                value={this.state.name}
                                onChange={(event) => this.handleChange(event)}
                            />
                            
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
    
      return { skills: state.skills, user:state.user, project:state.projects }
}

const mapDispatchToProps =dispatch =>  ({
    setProject: (project) => dispatch(addProject(project))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewProject)
