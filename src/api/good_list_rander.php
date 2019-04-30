<?php 
// 连接数据库
	include 'connect.php';
	// 获取前端传来的值============================
	$code=isset($_GET['code'])? $_GET['code']:'';

	if($code == 0){  //code==0 传入当前页码和每页条数----渲染列表页中间的数据
		// 获取从前端传过来的数据
		$qty=isset($_GET['qty'])? $_GET['qty']:20;
		$page=isset($_GET['currentPage'])? $_GET['currentPage']:1;
		$type=isset($_GET['type'])? $_GET['type']:'水果';
		
		// 查找数据库中 limit 满足前端的内容
		$res = $conn->query('select * from good_list limit '.($page-1)*$qty.','.$qty);
		// 获取查询结果
		$content=$res->fetch_all(MYSQLI_ASSOC);
		
		// 获取数据库记录的总条数  用于生成页码
		$all = $conn->query("select * from good_list where type='".$type."'");
		// // 获取查询结果
		$all= $all->num_rows;
		


		//前端希望返回的值有：内容$resArr、内容长度、当前页、每页数量
		$data = array(
				"content" => $content,
				"len" => $all,
				"page" => $page * 1,
				"qty" => $qty * 1 
			);
		// print_r($data);
		// 将查询结果转成字符串并返回前端
		echo json_encode($data,JSON_UNESCAPED_UNICODE);

		
	}

	// 价格排序=============================================
	if($code == 1){

		// 获取从前端传过来的数据
		$qty=isset($_GET['qty'])? $_GET['qty']:20;
		$page=isset($_GET['currentPage'])? $_GET['currentPage']:1;
		$type=isset($_GET['type'])? $_GET['type']:'水果';

		$num1=$page*16-16;
		// 获取整个数据库并排序
		$sql="select * from good_list order by now_price desc limit ".$num1.",16";

		$res=$conn->query($sql);
		$res = $res->fetch_all(MYSQLI_ASSOC);
		
		// 获取数据库记录的总条数  用于生成页码
		$all = $conn->query("select * from good_list where type='".$type."'");
		// 获取查询结果
		$all= $all->num_rows;
		
		// 获取数据库记录的总条数  用于生成页码
		//前端希望返回的值有：内容$resArr、内容长度、当前页、每页数量
		$data = array(
				"content" => $res,
				"len" => $all,
				"page" => $page * 1,
				"qty" => $qty * 1 
			);
		
		echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}
// code=2 销量排序---未做-=================

// ========================================
// 	code==3 加入购物车step1--点击按钮，传入当前用户名和商品id===把当前用户和商品信息传回前端====再由前端发起请求存入数据库=================
	if($code == 3){
		// 接收从前端传入的数据----------------
		$uname=isset($_GET['uname'])? $_GET['uname']:'';
		
		$gid=isset($_GET['gid'])? $_GET['gid']:'1';
		
		// 查找数据库中gid为当前值的信息-----------
		$res = $conn->query("select * from good_list where id='".$gid."'");
		$data = $res->fetch_assoc();

		// 拼接数组-----------------------
		$uname = array("uname"=>$uname);

		$data = $uname+$data;

		echo json_encode($data,JSON_UNESCAPED_UNICODE);
		
		}


	// 添加购物车step2 将数据插入数据库==========================================
	if($code == 4){
		// 接收从前端传入的数据----------------------
		$uname=isset($_GET['uname'])? $_GET['uname']:'';
		$gname=isset($_GET['gname'])? $_GET['gname']:'';
		$now_price=isset($_GET['gprice'])? $_GET['gprice']:'';
		$qty=isset($_GET['qty'])? $_GET['qty']:'';
		$spec=isset($_GET['spec'])? $_GET['spec']:'';
		$id=isset($_GET['id'])? $_GET['id']:'';
		$total=isset($_GET['total'])? $_GET['total']:'';
		
		// sql语句，将信息写入数据库----------
		$sql="insert into cart (uname,gname,now_price,qty,spec,id,total) VALUES ('".$uname."','".$gname."','".$now_price."','".$qty."','".$spec."','".$id."','".$total."')";

		if ($conn->query($sql)) {

		    echo "插入成功";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

// 'code':0,'qty':16,'currentPage':1

		//关闭查询结果 
		

 ?>