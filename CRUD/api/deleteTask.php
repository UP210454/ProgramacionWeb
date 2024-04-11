<?php
include './partials/connection.php';
try{
        $id = $_POST['id'];
        $query = "DELETE FROM task WHERE id = {$id};";
        $conn->prepare($query)->execute();  
        echo "Task Deleted Successfully";  
    

}catch(PDOException $e){
    die($e->getMessage());
}
?> 