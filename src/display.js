import appDriver from './index.js';
import cheyyImg from './cheyy.png';


let a = new appDriver();

const defaultProject = a.getDefault();

let t1= a.createTask("clean", "u know", "tomorrow", "high")
let t2= a.createTask("wipe", "wat", "hehe", "meow")

let p1 = a.createProject("poopie")
let t3 = a.createTask("flush", "skibidi", "sigma", "hehe", p1);

let content = document.getElementById("content");
let nav = document.getElementById("navbar");
let cheyy = new Image();
cheyy.src= cheyyImg;
cheyy.id = 'cheyy';
nav.prepend(cheyy);

const addProjectDialog = document.querySelector('#addProjectDialog')
const confirmButton = document.querySelector('#confirmBtn')
const newProjectTitle = document.querySelector('#title');
let newProjectBtn = document.querySelector('#new-project')
newProjectBtn.addEventListener('click', () => {
    addProjectDialog.showModal();
})

confirmButton.addEventListener("click", ()=>{
    event.preventDefault();
    let newProject=  a.createProject(newProjectTitle.value);
    updateTasks();
    addProjectDialog.close();
})



function updateTasks(){
    let projectList = a.projectList;
    console.log(projectList);
    content.innerHTML='';
    projectList.forEach(project => {
        let div = document.createElement('div');
        div.className = 'project-container'

        let projectHead = document.createElement('div');
        projectHead.className = 'project-header';

        let h2 = document.createElement('h2');
        let taskBtn = document.createElement('button');
        taskBtn.className = 'header-button';
        taskBtn.id = 'new-task';
        taskBtn.innerText = '+'
        h2.className = 'project-name'
        h2.innerText = `${project.getTitle()}`;

        projectHead.appendChild(h2);
        projectHead.appendChild(taskBtn);

        div.appendChild(projectHead);
        project.getTasks().forEach(task => {
            let taskDiv = document.createElement('div');
            taskDiv.className = 'task-container';
            let p = document.createElement('p');
            p.className = 'task-name'
            let p2 = document.createElement('p');
            p2.className = 'task-desc'
            p2.innerText = task.description;
            p.innerText = task.title;
            taskDiv.appendChild(p);
            taskDiv.appendChild(p2);
            div.appendChild(taskDiv); 
        });
        content.appendChild(div);
    })
}


updateTasks();