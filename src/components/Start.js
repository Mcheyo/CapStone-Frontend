import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {signUp} from '../redux/actions'
const Start = props => { 
    
    return( 
        <div className="StartPageButtons text-center">
            <Link to={'/signup'}>
          <Button variant="primary"
          value="client"
          onClick={(e) => props.onClick(e.target.value)}
          className="ClientButton"
          >I have an Idea! </Button>
          <Button variant="dark"
          value="developer"
          onClick={(e) => props.onClick(e.target.value)}
          className="DeveloperButton"
          >I can make an Idea 
          </Button>
           </Link>
        </div>
    )
}




const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = (dispatch) => {
    return { 
     onClick: (value)=> dispatch(signUp(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start)



