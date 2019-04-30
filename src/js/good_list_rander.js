$(function() {

    // 1.点击购物车实现跳转功能====start==============
    $gouwu = $('#head .gouwu');
    $gouwu.on('click', function() {
        location.href = '../html/car2.html';
    })
    // 购物车按钮跳转=========end=========

    // 2.渲染头部名字=======start===================================
    $rander_name_login_in = $('.shortcut_r .name .login-in span')
    $rander_name_login_out = $('.shortcut_r .name .login-out')
    // 拿存储的cookie------------------------
    // 拿到 uname-----------------
    var cookieItem = document.cookie;
    cookieItem = cookieItem.split('; ');
    cookieItem.forEach(function(item, idx) {
        var arr = item.split('=');
        if (arr[0] == 'uname') {
            $rander_name_login_in.text(arr[1]).css({ 'color': 'red' });
            $rander_name_login_out.text('退出');
        }

    })

    $rander_name_login_out.on('click', function() {

        $rander_name_login_in.text('请登录');
        $.cookie("uname", "", { expires: -1 });

    })

    $rander_name_login_in.on('click', function() {
        location.href = encodeURI("../html/login.html");
    })
    // =====渲染头部名字===end=============================
    // 
    // 3.整体渲染 =====传入功能号：code：0======start==============
    // 传入回调函数 在渲染后执行代码--------------
    randerAll(0, function() {

        // // 4.点击按钮，加入购物车====start===================
        // $addCart_li = $('.rander_li');
        // // console.log($addCart_li);
        // $addCart_btn = $('.addcart');
        // console.log($addCart_btn);
        // var str = '';

        // $addCart_btn.on('click', function(e) {
        //     e.preventDefault();

        //     // 先判断有无存放cookie-------------
        //     if (uname[0] == 'uname') {
        //         console.log(uname[1]);
        //         // 判断成立，获取数据-------------
        //         // 点击按钮，获取当前商品的id值---
        //         // $uname = uname[1];
        //         $num = $(this).parents('.rander_li').index();
        //         $addCart_gid = $addCart_li.eq($num).prop('dataset').id;

        //         // 往数据库传商品id值和用户名，返回该id值和商品信息-----code：3---加入购物车第一步-----------其实这步可以不用传用户id-----
        //         $.get('../api/good_list_rander.php', { 'code': 3, 'gid': $addCart_gid, 'uname': uname[1] }, function(res) {
        //             res = JSON.parse(res); //返回的res为用用户名和当前li对用的商品信息
        //             var id = res.id;
        //             var img = res.img;
        //             var gname = res.name;
        //             var now_price = res.now_price;
        //             var ori_price = res.ori_price;
        //             var spec = res.spec;
        //             var uname = $(".login-in span")[0].innerText;
        //             console.log(uname)
        //             var qty = 1;
        //             var total = qty * now_price;

        //             // 判断到已登录 发送请求
        //             $.get('../api/good_list_rander.php', { 'code': 4, 'uname': uname, 'gname': gname, 'gprice': now_price, 'qty': qty, 'spec': spec, 'id': id, 'total': total }, function(res) {
        //                 // 获取的res为商品商品是否插入成功信息
        //                 res = JSON.parse(res);
        //                 console.log(res);
        //             })
        //         })

        //     } else {
        //         // 如果用户没有存放cookie（没登陆） 跳转到登陆页面------------------
        //         location.href = encodeURI("../html/login.html");
        //     }

        // })
        // // 5.要在回调函数中执行，不然会有异步问题，点击li，传输改商品的id值到详情页==start==================
        // $addCart_li.on('click',function(){
        //     console.log($(this));
        //     // location.href = encodeURI("../html/detail?");
        // })
        // =============跳转详情页===end===========================

    });

    $p_num = $('.p-wrap .p-num');

    // 4.点击价格排序===code:1============================
    $price_Sort = $('.main_r .filter .filter-top .f-sort a:nth-child(5)');
    $price_Sort.on('click', function(e) {
        e.preventDefault();
        // 点击排序，重新渲染li  ---传入功能号code：1；先对数据进行排序--------------
        // 点击排序之前先把前面生成的页码清掉----------
        $p_num[0].innerHTML = '';
        randerAll(1);
    })

    // 5.点击li，传输改商品的id值到详情页==start==================

    // =============跳转详情页===end===========================


    // 整体渲染函数------传入功能号-----------------
    function randerAll(code, fn) {
        // 数据渲染===================================
        $gl_warp = $('.good_list .gl_warp');

        // 渲染商品列表-----向后端传入 功能号--每页显示数量--当前页码--type----------------
        $.get('../api/good_list_rander.php', { 'code': code, 'qty': 16, 'currentPage': 1, 'type': '水果' }, function(res) {
            res = JSON.parse(res);
            console.log(res);
            // 渲染第一页出来
            rander_gl(res);

            //动态生成页码-------------------------------
            var pageNum = Math.ceil(res.len / res.qty);

            createPage();

            function createPage() {
                // 生成上一页-----------
                var pn_prev = document.createElement('a');
                pn_prev.classList.add('pn-prev');
                pn_prev.innerText = '<上一页';
                $p_num[0].appendChild(pn_prev);

                // 根据页数 生成中间页码-------------------
                for (let i = 0; i < pageNum; i++) {
                    var aPage = document.createElement('a');
                    aPage.innerText = i + 1;
                    $p_num[0].appendChild(aPage);
                }

                // 生成下一页------------------------
                var pn_next = document.createElement('a');
                pn_next.classList.add('pn-next');
                pn_next.innerText = '下一页>';
                $p_num[0].appendChild(pn_next);
            }





            $p_num.on('click', 'a', function() {
                // 给点击的页码高亮-----------------------
                $p_num.find('a').css({ 'background': '#fff', 'border': '0 none', 'color': 'red' })
                    .not($(this)).css({ 'border': '1px solid #ddd', 'color': '#666' });
                // 获取当前页码的内容，并传到后台-----------------
                $currentPage = $(this).text();
                // 向后台请求数据----------------------------------
                $.get('../api/good_list_rander.php', { 'code': 0, 'qty': 16, 'currentPage': $currentPage, 'type': '水果' }, function(res) {
                    res = JSON.parse(res);
                    // var content = res.content;
                    rander_gl(res);
                })
            })



            // "content" => $content,
            // "len" => count($content),
            // "page" => $page * 1,
            // "qty" => $qty * 1 

        })
        typeof fn == "function" ? fn() : "";
    }

    // 渲染函数li-----------------------------res是一个对象,res.content;对象数组
    function rander_gl(res) {
        // res是一个对象
        var content = res.content;
        // console.log(content);//对象数组

        $gl_warp[0].innerHTML = content.map(function(item, idx) {

            return ` <li class="rander_li" data-id='${item.id}'>
                        <div class="gl-i-wrap">
                            <div class="p-img">
                                <a target="_blank" href="#">
                                    <img src="${item.img}">
                                </a>
                            </div>
                            <div class="p-price" title>
                                <strong><em>￥</em><i>${item.now_price}</i></strong></div>
                            <div class="p-name">
                                <a target="_blank" href="#">
                                    <em>${item.title}</em>
                                    <i class="promo-words"> ${item.spec}</i>
                                </a>
                            </div>
                            <div class="p-commit">
                                <strong><a href="#">5400+</a>条评价</strong>
                            </div>
                            <div class="p-shop"><span class="J_im_icon"><a href="#">${item.type_2}</a><b class="im-01"></b></span></div>
                            <div class="p-icons"><i class="goods-icons4 J-picon-tips" data-tips="本商品参与满减促销">满减</i>
                            </div>
                            <div class="p-operate clearfix">
                                <a class="p-o-btn " href="#"><i></i>对比</a>
                                <a class="p-o-btn focus J_focus" href="#"><i></i>关注</a>
                                <a class="p-o-btn addcart" href="#"><i></i>加入购物车</a>
                            </div>
                            <!-- <span class="p-promo-flag">广告</span> -->
                            <!-- <img src="#"> -->
                        </div>
                    </li>`

        }).join('');

        // 4.点击按钮，加入购物车====start===================
        $addCart_li = $('.rander_li');
        $addCart_img = $('.p-img');
        // console.log($addcart_img);
        $addCart_btn = $('.addcart');
        var str = '';

        $addCart_btn.on('click', function(e) {
            e.preventDefault();
            cookieItem.forEach((item, idx)=> {
                var arr = item.split('=');
                if (arr[0] == 'uname') {
                    
                    $addCart_gid = $(this).parents('.rander_li').prop('dataset').id;
                    console.log($addCart_gid);

                    // 往数据库传商品id值和用户名，返回该id值和商品信息-----code：3---加入购物车第一步-----------其实这步可以不用传用户id-----
                    $.get('../api/good_list_rander.php', { 'code': 3, 'gid': $addCart_gid, 'uname': arr[1] }, function(res) {
                        res = JSON.parse(res); //返回的res为用用户名和当前li对用的商品信息
                        console.log(666);
                        console.log(res);
                        var id = res.id;
                        var img = res.img;
                        var gname = res.name;
                        var now_price = res.now_price;
                        console.log(now_price);
                        var ori_price = res.ori_price;
                        var spec = res.spec;
                        var uname = $(".login-in span")[0].innerText;
                        console.log(uname)
                        var qty = 1;
                        var total = qty * now_price;

                        // 判断到已登录 发送请求
                        $.get('../api/good_list_rander.php', { 'code': 4, 'uname': uname, 'gname': gname, 'gprice': now_price, 'qty': qty, 'spec': spec, 'id': id, 'total': total }, function(res) {
                            // 获取的res为商品商品是否插入成功信息
                            // res = JSON.parse(res);
                            console.log(res);
                        })
                    })


                } 

            })


            // 先判断有无存放cookie-------------
            // if (arr[0] == 'uname') {
            //     console.log(arr[1]);
            //     // 判断成立，获取数据-------------
            //     // 点击按钮，获取当前商品的id值---
            //     // $uname = uname[1];
            //     $num = $(this).parents('.rander_li').index();
            //     $addCart_gid = $addCart_li.eq($num).prop('dataset').id;

            //     // 往数据库传商品id值和用户名，返回该id值和商品信息-----code：3---加入购物车第一步-----------其实这步可以不用传用户id-----
            //     $.get('../api/good_list_rander.php', { 'code': 3, 'gid': $addCart_gid, 'uname': arr[1] }, function(res) {
            //         res = JSON.parse(res); //返回的res为用用户名和当前li对用的商品信息
            //         var id = res.id;
            //         var img = res.img;
            //         var gname = res.name;
            //         var now_price = res.now_price;
            //         var ori_price = res.ori_price;
            //         var spec = res.spec;
            //         var uname = $(".login-in span")[0].innerText;
            //         console.log(uname)
            //         var qty = 1;
            //         var total = qty * now_price;

            //         // 判断到已登录 发送请求
            //         $.get('../api/good_list_rander.php', { 'code': 4, 'uname': uname, 'gname': gname, 'gprice': now_price, 'qty': qty, 'spec': spec, 'id': id, 'total': total }, function(res) {
            //             // 获取的res为商品商品是否插入成功信息
            //             res = JSON.parse(res);
            //             console.log(res);
            //         })
            //     })

            // } else {
            //     // 如果用户没有存放cookie（没登陆） 跳转到登陆页面------------------
            //     location.href = encodeURI("../html/login.html");
            // }

        })
        // 5.要在回调函数中执行，不然会有异步问题，点击li，传输改商品的id值到详情页==start==================
        $addCart_img.on('click', function(e) {
            e.preventDefault();
            var chuan_id = $(this).parents('.rander_li').prop('dataset').id;
            // console.log($(this).prop('dataset').id);
            location.href = encodeURI("../html/detail?id=" + chuan_id);
        })

    }

})