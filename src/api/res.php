<?php 

	include 'connect.php';
	$code = isset($_POST['code'])?$_POST['code']:'';
	if($code == 1){
		// 获取前端传来的数据================================
		$uname = isset($_POST['uname'])?$_POST['uname']:'';
		$psw = isset($_POST['psw'])?$_POST['psw']:'';

		$res = $conn->query("select * from user where uname='".$uname."'");
		$num = $res->num_rows;
		// echo $num;
		if($num == 0){
			echo 'true';
		}else{
			echo 'false';
		}


	}

	if($code == 2){
		$uname = isset($_POST['uname'])?$_POST['uname']:'';
		$psw = isset($_POST['psw'])?$_POST['psw']:'';
		$email = isset($_POST['email'])?$_POST['email']:'';

		$res = $conn->query("insert into user (uname,psw,email) values ('".$uname."','".$psw."','".$email."')");
	
		
		if($res){
			$data = array(
				'uname'=>$uname
			);
			echo json_encode($data,JSON_UNESCAPED_UNICODE);
		}
		
		// $conn->close();

		}
	
	

 ?>