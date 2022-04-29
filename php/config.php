<?php 
    $conn = mysqli_connect("localhost", "root", "", "realtime_chat");
    if($conn){
        echo mysqli_connect_error();
    }
?>