import {combineReducers} from "redux"


const intialState = { 
    user: {}
}
function userReducer(state = intialState, action){ 
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
const rootReducer = combineReducers({
   user : userReducer,
    signUp : signUpReducer,
    skills : skillsReducer
  })
  
export default rootReducer