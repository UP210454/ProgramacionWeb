<?php
include './partials/connection.php';
try{
    $sql = "select t.id, firstname, title, completed from task t inner join `user` u on t.idUser=u.id;";
    $state = $conn->query($sql);
    $json = [];
    while($row = $state->fetch(PDO::FETCH_ASSOC)){
        array_push($json,[
            "id" => $row['id'],
            "firtstname" => $row['firstname'],
            "title" => $row['title'],
            "completed" => $row['completed']
        ]);
    }
    echo json_encode($json);
}catch(PDOException $e){
    die($e->getMessage());
}

?>