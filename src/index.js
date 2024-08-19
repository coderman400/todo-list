import './style.css'
function Todo(title,description,dueDate,priority, project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
    this.project = project;

    project.add(this);

    const info = ()=>{
        return {
            name:this.title,
            desc:this.description,
            due:this.dueDate,
            prio:this.priority,
            project: this.project.getTitle()
        }
    }

    const move = (project)=>{
        project.add(this);
        this.project.remove(this);
        this.project = project;
    }

    const setTitle = (title) =>{
        this.title = title;
    }

    const setDescription = (description) =>{
        this.description = description;
    }

    const setDue = (dueDate) => {
        this.dueDate = dueDate;
    }

    const setPriority = (priority) => {
        this.priority = priority;
    }

    return {title, description, priority, dueDate, info, move, setTitle, setDescription, setDue, setPriority}
}

function Project(title){
    this.title = title;
    let list = [];

    const add = (todo) =>{
        list.push(todo);
    }

    const remove = (todo) =>{
        index = list.indexOf(todo);
        if(index>-1){
            list.splice(index,1);
        }else{
            console.log("cant find this element");
        }
    }
    const getTasks = () => {
        return list;
    }

    const getTitle = () => {
        return this.title;
    }
    return {add, getTasks, remove , getTitle}
}

export default function applicationDriver(){
    let defaultProject = new Project("default");
    let projectList = [defaultProject];

    const createTask= (title,description,dueDate,priority, project = defaultProject)=>{
        return new Todo(title,description,dueDate,priority, project);
    }
    const createProject = (title) =>{
        let p = new Project(title);
        projectList.push(p);
        return p;
    }
    const addProject = (project) =>{
        projectList.push(project);
    }
    const projectInfo = (project = defaultProject) => {
        return project.getInfo();
    }
    const getDefault = () => {
        return defaultProject;
    }
    return {projectList, createTask, createProject, projectInfo, getDefault, addProject}
}


// a = new applicationDriver();

// let t1= a.createTask("clean", "u know", "tomorrow", "high")
// let t2= a.createTask("wipe", "wat", "hehe", "meow")
// console.log(a.projectInfo());
// console.log("hi")

