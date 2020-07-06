<?php
    include "./conn.php";

    if(isset($_POST['username']) && isset($_POST['password'])){
        $username=$_POST['username'];
        $password=$_POST['password'];

        $result=$conn->query("select * from register where username='$username' and password='$password' ");
        // print_r($res) ;//返回一个对象
        if($result->num_rows){
            echo true;
        }else{
            echo false;
        }
    }
?>