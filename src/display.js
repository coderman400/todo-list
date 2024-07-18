import appDriver from './index.js';

let a = new appDriver();

let t1= a.createTask("clean", "u know", "tomorrow", "high")
let t2= a.createTask("wipe", "wat", "hehe", "meow")

let content = document.getElementById("content");
