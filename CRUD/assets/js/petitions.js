export async function getAllUsers(){
    const resp = await fetch("/crud/api/getUsers.php");
    const json = await resp.json();
    return json;
}

export async function getAllTasks(){
    const resp = await fetch("/crud/api/getTasks.php");
    const json = await resp.json();
    return json;
}

export async function createTask(data){
    const settings = {
        method: 'POST',
        body: data
    };
    
    try {
        const resp = await fetch('/crud/api/createTask.php', settings);
        const json = await resp.json();
        return json;
    } catch (e) {
        return e;
    }
}

export async function deleteTask(fordata){
    const resp = await fetch("/crud/api/deleteTask.php",{
        method: 'POST',
        body: fordata
    });
}

export async function getTask(fordata){
    const resp = await fetch("/crud/api/getTask.php",{
        method : "POST",
        body : fordata
    });
    const json = await resp.json();
    return json;
}

export async function updateTask(fordata){
    const resp = await fetch("/crud/api/updateTask.php",{
        method : "POST",
        body : fordata
    });
}