import {job, task, project} from "../interfaces/interfaces.js";

function createJob(name:string,payload:task|project):job {
    return {
        name,
        payload,
    }
}

export {createJob};