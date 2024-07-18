import './style.css'
function Todo(title,description,dueDate,priority, project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
    this.project = project;

    project.add(this);

    const info = ()=>{
        return `${this.title} : ${this.description} due by ${this.dueDate}, ${priority} priority`
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

    return {info, move, setTitle, setDescription, setDue, setPriority}
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
    const getInfo = () => {
        let infoRes =`${title} : `;
        list.forEach((item)=>{
            console.log(item)
            infoRes+=item.title;
        })
        return infoRes;
    }
    return {add, getInfo, remove }
}

export default function applicationDriver(){
    let defaultProject = new Project("default");

    const createTask= (title,description,dueDate,priority, project = defaultProject)=>{
        return new Todo(title,description,dueDate,priority, project);
    }
    const createProject = (title) =>{
        return new Project(title);
    }

    const projectInfo = (project = defaultProject) => {
        return project.getInfo();
    }

    return {createTask, createProject, projectInfo}
}


// a = new applicationDriver();

// let t1= a.createTask("clean", "u know", "tomorrow", "high")
// let t2= a.createTask("wipe", "wat", "hehe", "meow")
// console.log(a.projectInfo());
// console.log("hi")

