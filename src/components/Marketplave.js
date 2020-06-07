import React, { Component } from 'react'
import {connect} from "react-redux"
class Marketplace extends Component { 

    render(){ 
        debugger
        return(
  <div>
      testing 
  </div>
        )

        
    }
}

const mapStateToProps = (state) =>{ 
    return { 
       project:state.projects
    }
}
export default connect(mapStateToProps)(Marketplace);