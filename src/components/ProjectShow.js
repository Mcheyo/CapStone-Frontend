import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProject} from '../redux/actions'
import {Button} from 'react-bootstrap'
export class ProjectShow extends Component {
  state = { 
      
      project: {}, 
      suggestedUsers: [], 
      loading: true
  }
  componentDidMount(){ 
    
    let id = this.props.projectToShow.id
    fetch(`http://localhost:3000/projects/${id}`)
    .then(res => res.json())
    .then(project => { 
        this.setState({project:project.project, suggestedUsers:project.suggested_users, loading:false})
        
    })
  }

sendProposal = (user) => { 
    let client = this.state.project.client_id
    let developer = user.id 
    let idea = this.state.project.idea
    let project = this.state.project.id
    
 fetch('http://localhost:3000/proposals',{ 
     method:"POST", 
     headers: {
        "Content-Type" : 
        "application/json",
        Accept:"application/json"
      }, 
      body: JSON.stringify({client_id: client, developer:developer, idea:idea, project:project})
 })
 .then(res => res.json())
 .then(proposal => console.log(proposal))

}
    render() {
    
       
        const{name, id, status, idea} = this.props.projectToShow
        
         let proposal = "Propose!"
        return (
            !this.state.loading?
            <div className="proposal-box">
                 <h1>{name}</h1>
                 <h3>{status}</h3>
                    <p>{idea}</p>
                <div>
                    Here are some suggested users that can make your app!
        {this.state.suggestedUsers.map(user => <div> {user.name} <Button  onClick={ () => this.sendProposal(user)} placeholder={proposal}> Propose!</Button> </div>  )}
                </div>
             
                               
                
            </div>: <div>loading</div>
        )
    }
}

const mapStateToProps = (state) => ({
    
    project: state.projects
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)
