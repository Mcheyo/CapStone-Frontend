import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getProject} from '../redux/actions'
export class ProjectShow extends Component {
  state = { 
      
      loading: true 
  }
  componentDidMount(){ 

  }
    render() {
       debugger  
       
        const{name, id, status, idea} = this.props.projectToShow
        
    
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
