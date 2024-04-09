<?php
include './partials/connection.php';
try{
    $sql = "select * from `user` order by lastname, firstname asc;";
    $state = $conn->query($sql);
    $json = [];
    while($row = $state->fetch(PDO::FETCH_ASSOC)){
        array_push($json,[
            "id" => $row['id'],
            "fullname" => "{$row['firstname']} {$row['lastname']}" 
        ]);
    }
    echo json_encode($json);
}catch(PDOException $e){
    die($e->getMessage());
}

?>