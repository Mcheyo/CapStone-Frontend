import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProjectShow extends Component {
  state = { 
      loading: true 
  }
  
    render() {
       
        const{name, id, status, idea} = this.props.projects.project
        
    debugger
        return (
            <div>
                 <h1>{name}</h1>
                 <h3>{status}</h3>
                    <p>{idea}</p>
             
                               
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
    project: state.projects
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)
