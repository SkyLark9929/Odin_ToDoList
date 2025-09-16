import crypto from 'crypto'

function createTask(name, project, deadline, priority, description){
    let name = name;
    let project = project;
    let deadline = deadline;
    let priority = priority;
    let description = description;
    let id = crypto.randomUUID();

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