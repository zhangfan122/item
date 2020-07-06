<?php
    include "./conn.php";

    if(isset($_POST['username']) && isset($_POST['password'])){
        $username=$_POST['username'];
        $password=$_POST['password'];
        $email=$_POST['email'];

        $res=$conn->query("insert register values(null,'$username','$password','$email',NOW())");
        echo $res;
    }
?>