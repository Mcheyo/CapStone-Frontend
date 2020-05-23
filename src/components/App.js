import React, { Component } from 'react';
import Navbar from './Navbar'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setUser, getSkills, getAllProjects} from '../redux/actions'
import {Route, Switch, Redirect} from 'react-router-dom'
import Start from './Start'
import SignUpMain from './SignUpMain'
import NewProject from './NewProject'
import ProjectShow from './ProjectShow'
import '../App.css'
import Login from './Login'
class App extends Component { 
   
  state={ 
    loading: true
  }
  componentDidMount(){ 
    
    // fetch('http://localhost:3000/users/13')
    // .then( res => res.json())
    // .then(user => { 
    // this.props.onFetch(user)
    // })
 
    fetch('http://localhost:3000/skills')
    .then(res => res.json())
    .then( skills => this.props.onFetch2(skills))

    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(projects =>  { 
     this.props.onFetch3(projects)
     this.setState({loading: false })})
  }
  render(){ 
    
    return( 
      !this.state.loading? 
      <div className="App"> 
      <Navbar/> 
      <Switch>
        <Route exact path='/signup' component={SignUpMain}/> 
        <Route exact path = '/profile' render={() => {
          return this.props.user.name? <Profile/>: <Redirect to="/signup"/>
        }}/>
        <Route exact path='/' component={Start}/> 
        <Route exact path= '/project/new' component={NewProject} />
        <Route exact path ='/login' component={Login}/>
        <Route exact path='/project/:id' render={(props)=> { 
          let id = parseInt(props.match.params.id)
            
          let projectToShow = this.props.projects.find(project => project.id === id)
          
          return <ProjectShow projectToShow={projectToShow}/>
        }} />
      </Switch>
      </div>: <div>loading</div>
    )
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REDUX~~~~~~~~~~~~~~~~~~~~~~
const mapStateToProps = (state) => { 
  
  return{ 
    user: state.user, projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => ({ 
  
  onFetch: (userObj) => dispatch(setUser(userObj)), 
  onFetch2: (skills) => dispatch(getSkills(skills)), 
  onFetch3: (projects) => dispatch(getAllProjects(projects))

  
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
