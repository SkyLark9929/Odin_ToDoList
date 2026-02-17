type taskId = string

type  projectId = string

interface task{
    name: string;
    description: string;
    projectId: projectId;
    id: string;
}

interface project{
    name: string;
    id:string;
}

interface job{
    name: string;
    payload: task|project|string;
}

export {task, project, job, taskId, projectId};