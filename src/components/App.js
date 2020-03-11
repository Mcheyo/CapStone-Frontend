import React, { Component } from 'react';
import Navbar from './Navbar'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setUser} from '../redux/actions'
import {Route, Switch} from 'react-router-dom'
import Start from './Start'
import SignUp from './SignUp'
class App extends Component { 
   
  componentDidMount(){ 
    
    fetch('http://localhost:3000/users/1')
    .then( res => res.json())
    .then(user => { 
      let t = this 
      
      this.props.onFetch(user)
    })

  }
  render(){ 
    
    return( 
      <div className="App"> 
      <Navbar/> 
      <Switch>
        <Route exact path='/signup' component={SignUp}/> 
        <Route exact path = '/profile' component={Profile}/>
        <Route path='/' component={Start}/> 
      </Switch>
      </div>
    )
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REDUX~~~~~~~~~~~~~~~~~~~~~~
const mapStateToProps = (state) => { 
  
  return{ 
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => { 
   
  return { 
     onFetch: (userObj) => dispatch(setUser(userObj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
