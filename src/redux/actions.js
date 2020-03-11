function setUser(userObj){ 

    return {type: "GET_USER", payload: userObj}
}

function signUp(value){ 
    return {type: "RENDER_SIGN_UP", payload: value}
}
export {setUser, signUp}