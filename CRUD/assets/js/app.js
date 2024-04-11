const listUsers = document.getElementById("users");
const listTasks = document.getElementById("tasks");
const form = document.getElementById("form-task");
const btnForm = document.getElementById("submit");
let tarea;

import {getAllUsers, getAllTasks, createTask, deleteTask, updateTask, getTask} from "./petitions.js";

document.addEventListener('DOMContentLoaded', async()=>{
    const users = await getAllUsers();
    let template = listUsers.innerHTML;
    for(const user of users){
        template += `
            <option value="${user.id}">${user.fullname}</option>
        `;
    }
    listUsers.innerHTML = template;
    await showTasks();
    
    const deleteBtn = document.querySelectorAll(".hector");
    deleteBtn.forEach(borrar => {
        borrar.addEventListener('click', async()=>{
            const fordata = new FormData();
            fordata.append('id', borrar.value);
            await deleteTask(fordata);
            await showTasks();
        });
    });

    const modifyBtn = document.querySelectorAll(".aaron");
    modifyBtn.forEach(modificar =>{
        modificar.addEventListener('click', async()=>{
            const fordata = new FormData();
            fordata.append('id', modificar.value);
            const modify = await getTask(fordata);
            document.getElementById("form-title").innerText = "Update";
            const users = await getAllUsers();
            let template = `
                <option selected disabled>Select a User</option>
                <hr class="border-dark" />
            `;
            for(const user of users){
                if(modificar.value == user.id){
                    template += `
                    <option value="${user.id}" selected>${user.fullname}</option>
                `;
                }else{                
                    template += `
                        <option value="${user.id}">${user.fullname}</option>
                    `;
                }
            }
            const titulo = document.getElementById("title");
            const check = document.getElementById("check");
            titulo.value = modify[0].title;
            check.checked = (modify[0].completed == 1) ? true : false;
            btnForm.value = 'update';
            listUsers.innerHTML = template;
            tarea = modify[0].id;
            await updateTask();
            await showTasks();
        });
    });

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
    if(btnForm.value = 'update'){
        fordata.append("id", tarea);
        await updateTask(fordata);
    }else{
        await createTask(fordata);
    }
    
    document.getElementById("submit").value = "create";
    document.getElementById("title").value = "";
    document.getElementById("users").value = "";
    document.getElementById("form-title").innerText = 'Insert task';
    document.getElementById("check").checked = false;
    

    await showTasks();
});

async function showTasks(){
    const tasks = await getAllTasks();
    let template2 = "";
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
                <button class="aaron btn btn-secondary btn-sm" value="${task.id}">
                    <span>Update</span> <i class="nf nf-md-pencil"></i>
                </button>
                <button class="hector btn btn-danger btn-sm" value="${task.id}">
                    <span>Delete</span> <i class="nf nf-cod-trash"></i>
                </button>
            </td>
        </tr>  
        `;
    }
    listTasks.innerHTML = template2;
    const deleteBtn = document.querySelectorAll(".hector");
    deleteBtn.forEach(borrar => {
        borrar.addEventListener('click', async()=>{
            const fordata = new FormData();
            fordata.append('id', borrar.value);
            await deleteTask(fordata);
            await showTasks();
        });
    });
    const modifyBtn = document.querySelectorAll(".aaron");
    modifyBtn.forEach(modificar =>{
        modificar.addEventListener('click', async()=>{
            const fordata = new FormData();
            fordata.append('id', modificar.value);
            const modify = await getTask(fordata);
            document.getElementById("form-title").innerText = "Update";
            const users = await getAllUsers();
            let template = `
                <option selected disabled>Select a User</option>
                <hr class="border-dark" />
            `;
            for(const user of users){
                if(modificar.value == user.id){
                    template += `
                    <option value="${user.id}" selected>${user.fullname}</option>
                `;
                }else{                
                    template += `
                        <option value="${user.id}">${user.fullname}</option>
                    `;
                }
            }
            const titulo = document.getElementById("title");
            const check = document.getElementById("check");
            titulo.value = modify[0].title;
            check.checked = (modify[0].completed == 1) ? true : false;
            btnForm.value = 'update';
            listUsers.innerHTML = template;
            tarea = modify[0].id;
            await updateTask();
            await showTasks();
        });
    });
}

