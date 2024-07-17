function Todo(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
    this.project = defaultProject;

    defaultProject.add(this);

    const info = ()=>{
        return `${this.title} : ${this.description} due by ${this.dueDate}, ${priority} priority`
    }

    const move = (project)=>{
        project.add(this);
        this.project.remove(this);
        this.project = project;
    }

    return {info, move}
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
    const info= () => {
        console.log(`${title} :`)
        list.forEach((item)=>{
            console.log(item);
        })
    }
    return {add, info, remove }
}

defaultProject= new Project("default");
newProject = new Project("new");
t1 = new Todo("clean", "u know", "tomorrow", "high") 
t2 = new Todo("wipe", "wat", "hehe", "meow")
defaultProject.info()