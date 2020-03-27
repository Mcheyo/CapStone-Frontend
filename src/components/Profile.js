import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button, Container, Row, Col, Card, CardDeck} from 'react-bootstrap'
import { ProjectShow } from './ProjectShow'
class  Profile extends Component  { 
    state = { 
        loading: true 
    }
    handleClick = ( proposal, e) => { 
        let id = proposal.id 
       let  value = e.target.value

    fetch(`http://localhost:3000/proposals/${id}`,{ 
        method: "PATCH", 
        headers: {
            "Content-Type" : 
            "application/json",
            Accept:"application/json"
          }, 
          body: JSON.stringify({status:value, id:id})
        })
          .then(res => res.json())
          .then(data => console.log(data))



    }
    render(){ 
    const{name, bio, username, proposals_received, proposals_sent, working_projects, proposed_projects} = this.props.user
    const pendingProposals = proposals_received.filter(proposal => proposal.status === "Pending")
    const acceptedProposals = proposals_received.filter(proposal => proposal.status === "Accepted")
    const rejectedProposals = proposals_received.filter(proposal => proposal.status === "Rejected")
    return( 
        
        <div>
          

  

<Container>
<Row>
    <Col sm={8}>
        <CardDeck>
   { proposed_projects.map(project => 
     <div className="col-lg-5 py-2">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
   {/* <Card.Subtitle className="mb-2 text-muted">by {project.client.name}</Card.Subtitle> */}
        <Card.Text>
        {project.idea}s
        </Card.Text>
        <Card.Link href={`project/${project.id}`}>Project Page</Card.Link>
        
      </Card.Body>
    </Card>
    </div>)}
    </CardDeck>
 
    </Col>
    <Col sm={4}>
           <div className="Bio">
           <h4>{name}</h4> 
            <h6>{bio}</h6>
           <p> {username}</p>
            </div>
            <div className="Pending">
    Pending
     {pendingProposals.map(proposal => <div>{proposal.client.name} wants to make {proposal.idea} 
     <button className="btn btn-danger" value="Accept" onClick={ (e) => this.handleClick(proposal, e)} >Accept</button> 
    <button className="btn btn-light" value="Reject"  onClick={ (e) => this.handleClick(proposal, e)} > Reject</button>  
        </div> )}

            </div>
            <div className="Accepted">
                Current Projects
                {acceptedProposals.map(proposal => <div> You are currently working {proposal.client.name}'s proposal to make {proposal.project.name}</div> )}
            </div>

            <div className="Sent">
              Sent Proposals
              {proposals_sent.map(proposal => <div> You sent out: {proposal.project.name} to {proposal.developer.name} </div>)}
            
              
            </div>
    </Col>
    </Row>
    
   
  
 
</Container>
        </div>
    )
}
}
const mapStateToProps = (state) => { 
  
    return{ 
        
      user: state.user
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({ 
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  