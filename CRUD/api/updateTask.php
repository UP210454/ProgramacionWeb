<?php
include './partials/connection.php';
try{
    $task_id = $_POST['id'];
        $task_title = $_POST['title'];
        $task_user = $_POST['idUser'];
        $task_completed = $_POST['completed'] == "true" ? 1:0;
        $query = "UPDATE task SET title = '".$task_title."', completed = '".$task_completed."', `idUser` = '".$task_user."' WHERE task.id = ".$task_id.";";
        $conn->prepare($query)->execute();  
        echo "Task updated Successfully";  

}catch(PDOException $e){
    die($e->getMessage());
}
?> 