import {project, projectId} from "../interfaces/interfaces.js";

function createProject(name:string, id:projectId):project {
    return {
        name,
        id
    }
}

export {createProject};