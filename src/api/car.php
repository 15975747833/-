<?php 
	include 'connect.php';
	$code=isset($_GET['code'])? $_GET['code']:'';

	if($code == 1){
		$uname=isset($_GET['uname'])? $_GET['uname']:'';
		$sql = "select * from cart where uname='".$uname."'";
		if ($conn->query($sql)) {
			$res = $conn->query($sql);
		    $data=$res->fetch_all(MYSQLI_ASSOC);
			echo json_encode($data,JSON_UNESCAPED_UNICODE);
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

		// $res = $conn->query();

	}




 ?>