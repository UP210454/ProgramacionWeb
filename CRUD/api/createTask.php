<?php
include './partials/connection.php';
//echo json_encode($_POST);
try{

    if(isset($_POST['title'])) {
        $task_title = $_POST['title'];
        $task_user = $_POST['idUser'];
        $task_completed = $_POST['completed'] == "true" ? 1:0;
        $query = "INSERT into task (title, idUser, completed) VALUES ('".$task_title."', '".$task_user."', '".$task_completed."')";
        $conn->prepare($query)->execute();  
        echo "Task Added Successfully";  
    }

}catch(PDOException $e){
    die($e->getMessage());
}
?> 