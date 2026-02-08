
class Model {
    #taskDict = {};
    #projectsArray = {};
    #jobTypes = {
        'add_task': this.#addTask,
        'add_project': this.#addProject,
        'remove_task': this.#removeTask,
        'remove_project': this.#removeProject
    }

    constructor(taskDict, projectsArray, jobTypes) {
        this.#taskDict = taskDict;
        this.#projectsArray = projectsArray;
        this.#jobTypes = jobTypes
    };

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
        this.#taskDict.taskId = task;
    };

    #addProject(project) {
        /**
         * receives project name (string) from dispatchJob
         * returns nothing but pushes project to the #projectArray
         */
        this.#projectsArray.push(project);
    }

    #removeTask(task_id) {
        /**
         * receives task_id (string) from dispatchTask
         * returns nothing, deletes task with task_id from #taskDict
         */
        delete this.#taskDict[task_id]
    }

    #removeProject(project_name) {
        /**
         * receives project_name (string) from dispatchTask
         * returns nothing, removes the project from the array
         */
        const PROJECT_INDEX = this.#projectsArray.indexOf(project_name);
        this.#projectsArray.splice(PROJECT_INDEX, PROJECT_INDEX);
    }

    alertDev() {
        /**
         * This method is here just to check what is happening inside the model
         */
        console.log(`Saved tasks: ${this.#taskDict.taskId}`);
        console.log(`Saved projects: ${this.#projectsArray}`);
    }
}

export { Model };