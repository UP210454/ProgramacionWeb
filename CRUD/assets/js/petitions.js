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