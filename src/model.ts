import {task, project, job, taskId, projectId} from "./interfaces/interfaces.js";

class Model {
    #taskDict: object = {};
    #projectDict: object = {};
    #jobTypes = {
        'add_task': (payload:task) => this.#addTask(payload),
        'add_project': (payload:project) => this.#addProject(payload),
        'remove_task': (payload:taskId) => this.#removeTask(payload),
        'remove_project': (payload:projectId) => this.#removeProject(payload)
    }

    dispatchJob(job:job) {
        /**
         * dispatchJob takes job object as a single argument
         * returns nothing but sends the payload to the corresponding method
         * @param job job object with properties name and payload
         */
        const method = this.#jobTypes[job.name];
        method(job.payload)
    };

    #addTask(task: task) {
        /**
         * receives task from dispatchJob
         * returns nothing but pushes task to the #taskArray
         */
        const taskId = task.id;
        this.#taskDict[taskId] = task;
    };

    #addProject(project:project) {
        /**
         * receives project and pushes its name (string) from dispatchJob
         * returns nothing but pushes project to the #projectArray
         */
        this.#projectDict[project.id] = project;
    }

    #removeTask(task_id:taskId) {
        /**
         * receives task_id (string) from dispatchTask
         * returns nothing, deletes task with task_id from #taskDict
         */
        delete this.#taskDict[task_id];
    }

    #removeProject(projectId:projectId) {
        /**
         * receives project_name (string) from dispatchTask
         * returns nothing, removes the project from the array
         */
        delete this.#projectDict[projectId];
    }

    get taskDict() { // in production input will be shaped in accordance with project-based filtering
        return this.#taskDict;
    }

    get projectDict() {
        return this.#projectDict;
    }
}

const mainModel = new Model();
export {mainModel, Model};
module.exports = mainModel;