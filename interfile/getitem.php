<?php
    include "./conn.php";

   if(isset($_REQUEST['id'])){
        $id=$_REQUEST['id'];
        $result=$conn->query("select * from vivogoods where sid='$id'");
        $row=$result->fetch_assoc();

        $json=json_encode($row);
        echo $json;
        $conn->close();
   }
?>