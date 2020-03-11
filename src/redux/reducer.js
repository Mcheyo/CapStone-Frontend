import {combineReducers} from "redux"


const intialState = { 
    user: {}
}
function userReducer(state = intialState, action){ 
    switch(action.type){ 
        case "GET_USER": 
         return { user: action.payload}
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
const rootReducer = combineReducers({
   user : userReducer,
    signUp : signUpReducer
  })
  
export default rootReducer