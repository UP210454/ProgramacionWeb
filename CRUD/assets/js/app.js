const listUsers = document.getElementById("users");
const listTasks = document.getElementById("tasks");
const form = document.getElementById("form-task")

import {getAllUsers, getAllTasks, createTask} from "./petitions.js";

document.addEventListener('DOMContentLoaded', async()=>{
    const users = await getAllUsers();
    let template = listUsers.innerHTML;
    for(const user of users){
        template += `
            <option value="${user.id}">${user.fullname}</option>
        `;
    }
    listUsers.innerHTML = template;

    const tasks = await getAllTasks();
    let template2 = listTasks.innerHTML;
    for (const task of tasks){
        template2 += `
            <tr>
                <td>${task.id}</td>
                <td>${task.firstname}</td>
                <td>${task.title}</td>
                <td><input type="checkbox"
            `;
        if(task.completed){
            template2+=`checked `;
        }
        template2+=`></td>
            <td>
                <button class="btn btn-secondary btn-sm">
                    <span>Update</span> <i class="nf nf-md-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm">
                    <span>Delete</span> <i class="nf nf-cod-trash"></i>
                </button>
            </td>
        </tr>  
        `;
    }
    listTasks.innerHTML = template2;
});

form.addEventListener('submit', async(e)=>{
    e.preventDefault();
    
    var title = document.getElementById("title").value;
    var user = document.getElementById("users").value;
    var completed = document.getElementById("check");

    const fordata = new FormData();
    fordata.append("title", title);
    fordata.append("idUser", user);
    fordata.append("completed", completed.checked);
    await createTask(fordata);

    document.getElementById("title").value = "";
    document.getElementById("users").value = "";
    document.getElementById("check").checked = false;

    const tasks = await getAllTasks();
    let template2 = listTasks.innerHTML;
    for (const task of tasks){
        template2 += `
            <tr>
                <td>${task.id}</td>
                <td>${task.firstname}</td>
                <td>${task.title}</td>
                <td><input type="checkbox"
            `;
        if(task.completed){
            template2+=`checked `;
        }
        template2+=`></td>
            <td>
                <button class="btn btn-secondary btn-sm">
                    <span>Update</span> <i class="nf nf-md-pencil"></i>
                </button>
                <button class="btn btn-danger btn-sm">
                    <span>Delete</span> <i class="nf nf-cod-trash"></i>
                </button>
            </td>
        </tr>  
        `;
    }
    listTasks.innerHTML = template2;
});