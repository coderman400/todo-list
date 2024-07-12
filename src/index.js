function Todo(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    const info = ()=>{
        return `${this.title} : ${this.description} due by ${this.dueDate}, ${priority} priority`
    }

    const toProject = (project) =>{
        project.add(this);
    }

    defaultProject.add(this);

    return {info, toProject}
}

function Project(title){
    this.title = title;
    let list = [];

    const add = (todo) =>{
        list.push(todo);
    }


    return {add, list}
}

defaultProject= new Project("default");
t1 = new Todo("clean", "u know", "tomorrow", "high") 