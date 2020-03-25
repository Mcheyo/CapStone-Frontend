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
function getAllProjects(project_array){ 
    return{type: "GET_ALL_PROJECTS", payload :project_array}
}
export {setUser, signUp, getSkills, getProject, getAllProjects}