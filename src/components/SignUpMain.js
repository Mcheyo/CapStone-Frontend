import React from 'react'
import {connect} from 'react-redux'
import SignUpClient from './SignUpClient'
import SignUpDeveloper from './SignUpDeveloper'
import {Redirect} from 'react-router-dom'
const SignUp = props => { 
    
    return(
        <div>
             { props.value =="developer"?
             <SignUpDeveloper/>: 
             props.value=="client"?
            <SignUpClient/>: 
            <Redirect to={'/'}/>
            
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