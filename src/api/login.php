<?php 
	include 'connect.php';
	// 验证登陆==================================
	$uname = isset($_POST['uname'])?$_POST['uname']:'';
	$psw = isset($_POST['psw'])?$_POST['psw']:'';

	// 查询用户名与密码是否匹配
	$res = $conn->query('select uid,uname,psw from user where uname="'.$uname.'" and psw="'.$psw.'"');
	// 获取查询数量--------------------------
	$num =$res->num_rows;

	if($num == 1){
		// 如果找到，获取第一行的值---------------------
		$res = $res->fetch_assoc();
		$uid = $res['uid'];
		$uname = $res['uname'];

	// 登陆成功返回用户名 id-------------------------
		$data = array(
			'uid'=>$uid,
			'uname'=>$uname,
			);

		
	// var_dump($res);
	}else{
		// 用户名或密码不匹配---------------------
		$data = 'false';
	}
	// 将结果返回前端----------------------------
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
	











	// 匹配用户名（唯一） 获取结果的第一行  返回值为true 判断有无存在  存在的话 判断这行的密码与前端传来的是否一致









 ?>