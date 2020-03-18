function setUser(userObj){ 

    return {type: "GET_USER", payload: userObj}
}

function signUp(value){ 
    return {type: "RENDER_SIGN_UP", payload: value}
}

function getSkills(skills){ 
    return {type: "GET_SKILLS", payload: skills}
}

function getProject(project){ 
    return{type: "GET_PROJECT", payload: project}
}
export {setUser, signUp, getSkills, getProject}