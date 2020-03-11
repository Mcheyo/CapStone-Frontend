function setUser(userObj){ 

    return {type: "GET_USER", payload: userObj}
}

export {setUser}