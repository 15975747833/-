<?php 
	include 'connect.php';
	$code=isset($_GET['code'])? $_GET['code']:'';
	if($code == 1){
		$id=isset($_GET['id'])? $_GET['id']:'';
		$sql = "select * from good_list where id='".$id."'";
		$res = $conn->query($sql);
		$data=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}















 ?>