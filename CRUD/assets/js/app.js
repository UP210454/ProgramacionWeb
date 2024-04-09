const listUsers = document.getElementById("users");
const listTasks = document.getElementById("tasks")
import {getAllUsers, getAllTasks} from "./petitions.js";

document.addEventListener('DOMContentLoaded', async()=>{
    const users = await getAllUsers();
    let template = listUsers.innerHTML;
    for(const user of users){
        template += `
            <option value="${user.id}">${user.fullname}</option>
        `;
    }
    listUsers.innerHTML = template;
});

document.addEventListener('DOMContentLoaded', async()=>{
    const tasks = await getAllTasks();
    let template2 = listTasks.innerHTML;
    for (const task of tasks){
        template2 += `
            <tr>
                <td>${task.id}</td>
                <td>${task.firstname}</td>
                <td>${task.title}</td>
                <td><input type="checkbox"></td>
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