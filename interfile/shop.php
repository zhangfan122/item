<?php
    include "./conn.php";

    if(isset($_REQUEST['idlist'])){
        $idlist=$_REQUEST['idlist'];

        $res=$conn->query("select * from vivogoods where sid in ($idlist)");

        $arr=array();

        for($i=0;$i<$res->num_rows;$i++){
            $arr[$i]=$res->fetch_assoc();
        }

        echo json_encode($arr);
        $conn->close();
    }
?>