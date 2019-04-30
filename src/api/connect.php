<?php 

	// 1.连接数据库
	// 2.将值传给php 进行比较
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'fresh';

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 检测连接
    mysqli_set_charset($conn,'utf8');
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    //查询前设置编码，防止输出乱码
    // $conn->set_charset('utf8');



 ?>