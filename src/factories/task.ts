import {task, taskId, projectId} from "../interfaces/interfaces.ts";

function createTask(name:string, description:string, projectId:projectId, id:taskId):task {
    return {
        name,
        description,
        projectId,
        id
    }
}

export {createTask};