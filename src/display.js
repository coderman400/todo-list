import appDriver from './index.js';
import cheyyImg from './cheyy.png';


let a = new appDriver();
let projectList = a.projectList;
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

projectList.forEach(project => {
    let div = document.createElement('div');
    div.className = 'project-container'
    let h2 = document.createElement('h2');
    h2.className = 'project-title'
    h2.innerText = `${project.getTitle()}`;
    div.appendChild(h2);
    project.getTasks().forEach(task => {
        let p = document.createElement('p');
        p.className = 'task-name'
        let p2 = document.createElement('p');
        p2.className = 'task-desc'
        p2.innerText = task.description;
        p.innerText = task.title;
        div.appendChild(p);
        div.appendChild(p2);
        content.appendChild(div); 
    });
})


