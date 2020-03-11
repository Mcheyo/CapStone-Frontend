
const intialState = { 
    user: {}
}
function reducer(state = intialState, action){ 
    switch(action.type){ 
        case "GET_USER": 
         return { user: action.payload}
        default: 
        return state 
    }
}

export default reducer 