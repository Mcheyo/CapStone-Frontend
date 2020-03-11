import React from 'react'
import {connect} from 'react-redux'
import SignUpClient from './SignUpClient'
import SignUpDeveloper from './SignUpDeveloper'
const SignUp = props => { 
    
    return(
        <div>
             { props.value =="developer"?
             <SignUpDeveloper/>: 
            <SignUpClient/>
            
             }
        </div>
    )
}
const mapStateToProps = (state) => {
    
   return{ 
       value: state.signUp
   }
   
}

const mapDispatchToProps = (dispatch) => {
    return { 
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)