import {combineReducers} from "redux"



function userReducer(state = {}, action){ 
    switch(action.type){ 
        case "GET_USER": 
         return  action.payload
        default: 
        return state 
    }
}

function signUpReducer(state = '', action){ 
    
    switch(action.type){ 
        case"RENDER_SIGN_UP" : 
        return action.payload
        default: 
        return state
    }
}

function skillsReducer(state= [], action){ 
    
    switch(action.type){ 
        case"GET_SKILLS": 
        return action.payload
        default: 
        return state 
    }
}

function projectsReducer(state= {}, action){ 
    
    switch(action.type){ 
        case"GET_PROJECT": 
        return action.payload
        case"GET_ALL_PROJECTS": 
        return action.payload
        case"ADD_PROJECT":
        state.push(action.payload.project)
        return  state 
        default: 
        return state 
    }
}
const rootReducer = combineReducers({
   user : userReducer,
    signUp : signUpReducer,
    skills : skillsReducer,
    projects : projectsReducer
  })
  
export default rootReducer