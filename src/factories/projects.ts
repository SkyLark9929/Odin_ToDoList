import {project, projectId} from "../interfaces/interfaces.ts";

function createProject(name:string, id:projectId):project {
    return {
        name,
        id
    }
}

export {createProject};