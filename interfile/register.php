<?php
    include "./conn.php";

    if(isset($_POST['username'])){
        $user=$_POST['username'];
        $result=$conn->query("select * from register where username='$user'");
        // print_r($result) ;//返回一个对象
        //mysqli_result Object ( [current_field] => 0 [field_count] => 5 [lengths] => [num_rows] => 1 [type] => 0 )
        if($result->num_rows){//存在
            echo true;//为1
        }else{
            echo false;//为空
        }
    }
?>