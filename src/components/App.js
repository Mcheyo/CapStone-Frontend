import React, { Component } from 'react';
import Navbar from './Navbar'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setUser, getSkills} from '../redux/actions'
import {Route, Switch} from 'react-router-dom'
import Start from './Start'
import SignUpMain from './SignUpMain'

class App extends Component { 
   
  componentDidMount(){ 
    
    // fetch('http://localhost:3000/users/1')
    // .then( res => res.json())
    // .then(user => { 
    //   let t = this 
      
    //   this.props.onFetch(user)
    // })
 
    fetch('http://localhost:3000/skills')
    .then(res => res.json())
    .then( skills => this.props.onFetch2(skills))
  }
  render(){ 
    
    return( 
      <div className="App"> 
      <Navbar/> 
      <Switch>
        <Route exact path='/signup' component={SignUpMain}/> 
        <Route exact path = '/profile' component={Profile}/>
        <Route exact path='/' component={Start}/> 
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

const mapDispatchToProps = (dispatch) => ({ 
  
  onFetch: (userObj) => dispatch(setUser(userObj)), 
  onFetch2: (skills) => dispatch(getSkills(skills))

  
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
