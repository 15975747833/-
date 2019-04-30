<?php 

	include 'connect.php';
	// echo 'ok';
	$res=$conn->query('select * from good_list where type="水果" limit 0,5');
	$all=$res->fetch_all(MYSQLI_ASSOC);
	// print_r($all);
	// var_dump($all);
	// echo $all;
	echo json_encode($all,JSON_UNESCAPED_UNICODE);
	
	// mysqli_fetch_all($res,MYSQLI_ASSOC); 
	// $num = $res->num_rows;



 ?>