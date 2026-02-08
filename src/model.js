
class Model {
    #taskDict = {};
    #projectsArray = [];
    #jobTypes = {
        'add_task': (payload) => this.#addTask(payload),
        'add_project': (payload) => this.#addProject(payload),
        'remove_task': (payload) => this.#removeTask(payload),
        'remove_project': (payload) => this.#removeProject(payload)
    }

    dispatchJob(job) {
        /**
         * dispatchJob takes job object as a single argument
         * returns nothing but sends the payload to the corresponding method
         * @param job job object with properties name and payload
         */
        const method = this.#jobTypes[job.name];
        method(job.payload)
    };

    #addTask(task) {
        /**
         * receives task from dispatchJob
         * returns nothing but pushes task to the #taskArray
         */
        const taskId = task.id;
        this.#taskDict[taskId] = task;
    };

    #addProject(project) {
        /**
         * receives project name (string) from dispatchJob
         * returns nothing but pushes project to the #projectArray
         */
        this.#projectsArray.push(project);
    }

    #removeTask(payload) {
        /**
         * receives task_id (string) from dispatchTask
         * returns nothing, deletes task with task_id from #taskDict
         */
        delete this.#taskDict[payload.task_id];
    }

    #removeProject(project_name) {
        /**
         * receives project_name (string) from dispatchTask
         * returns nothing, removes the project from the array
         */
        const PROJECT_INDEX = this.#projectsArray.indexOf(project_name);
        this.#projectsArray.splice(PROJECT_INDEX, PROJECT_INDEX);
    }
}

export { Model };