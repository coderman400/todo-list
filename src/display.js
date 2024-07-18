import appDriver from './index.js';
import cheyyImg from './cheyy.png';

let a = new appDriver();

let t1= a.createTask("clean", "u know", "tomorrow", "high")
let t2= a.createTask("wipe", "wat", "hehe", "meow")

let content = document.getElementById("content");
let nav = document.getElementById("navbar");
let cheyy = new Image();
cheyy.src= cheyyImg;
cheyy.id = 'cheyy';
nav.prepend(cheyy);

