import crypto from 'crypto'

function createTask(name, projectId, deadline, priority, description){
    let name = name;
    let deadline = deadline;
    let priority = priority;
    let description = description;
    let project = projectId;
    const id = crypto.randomUUID();

    return {
        // getters
        get taskName(){
            return name;
        },
        get taskProject(){
            return project;
        },
        get taskDeadline(){
            return deadline
        },
        get taskPriority(){
            return priority;
        },
        get taskDescription(){
            return description;
        },
        get taskID(){
            return id;
        },
        // setters
        set taskName(name){
            name = name;
        },
        set taskProject(project){
            project = project;
        },
        set taskDeadline(deadline){
            deadline = deadline;
        },
        set taskPriority(priority){
            priority = priority;
        },
        set taskDescription(description){
            description = description;
        }
     };
};

function createProject(name){
    const name = name;
    const projectId = crypto.randomUUID();
    let taskArray = [];

    // no direct use, only for model updating
    function addTask(task){
        taskArray.append(task)
    };

    function purgeTasks(){
        taskArray = []
    };
    
    return {
        get projectName(){
            return name
        },

        get projectId(){
            return projectId
        },

        set projectName(name){
            name = name;
        },
        addTask
    }
};

const MODEL = () => {
    let masterArray = []; // holds projects with tasks inside of them
    let arrayToPost = []; // only holds the part of masterArray that has to be posted

    function addProject(projectName){
        let project = createProject(projectName);
        masterArray.append(project);
        updateSelf();
    };

    function addTask(task){
        for(project of masterArray){
            if(task.project == project.projectId){
                project.addTask(task);
            };
        };
        updateSelf();
    };

    function postUpdate(){ // posts update to the corresponding channel

    };
    
    function purgeMasterArray(){
        masterArray = [];
    };

    return{
        addProject,
        addTask,
    }
};