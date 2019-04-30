$(function() {

    //  渲染头部名字=======start===================================
    $rander_name_login_in = $('.shortcut_r .name .login-in span');
    $rander_name_login_out = $('.shortcut_r .name .login-out');
    $nologin = $('.nologin');
    // 拿存储的cookie------------------------
    // 拿到 uname-----------------
    var cookieItem = document.cookie;
    cookieItem = cookieItem.split('; ');
    cookieItem.forEach(function(item, idx) {
        var arr = item.split('=');
        if (arr[0] == 'uname') {
            $rander_name_login_in.text(arr[1]).css({ 'color': 'red' });
            $rander_name_login_out.text('退出');
            // 判断到存在有cookie，发起请求，向数据库拿数据=======================
            $nologin.hide();
            $total_p = $('.total_p');
            console.log($total_p);
            $save_p = $('save_p');
            $rander_name_login_in.text(arr[1]).css({ 'color': 'red' });
            $rander_name_login_out.text('退出');
            // 发送请求---读取用户名对应的购物车----------------渲染出来-------
            $.get('../api/car.php', { 'code': 1, 'uname': arr[1] }, function(res) {
                res = JSON.parse(res);
                console.log(res);
                // 根据传回来的长度生成tr
                $car_body = $('.car_table tbody');
                // ---渲染tr----------------------
                var total_p = 0;
                // console.log(total_p);
                $car_body[0].innerHTML = res.map(function(item, idx) {
                    total_p += item.total * 1;
                    // console.log(item.total);
                    // console.log(total_p);
                    return `<tr>
                            <td>
                                <div>
                                    <img src="${item.img}">
                                </div>
                                <p>${item.gname}</p>
                                <p>ID:<span>${item.id}</span></p>
                                <p>Size:<span>${item.spec}</span></p>
                            </td>
                            <td>
                                <div class="btn clearfix">
                                    <input type="button" value="-" class="minus">
                                    <input type="text" value="${item.qty}" class="txt">
                                    <input type="button" value="+" class="plus">
                                </div>
                            </td>
                            <td>
                                <p>${item.ori_price}</p>
                                <p>${item.now_price}</p>
                            </td>
                            <td>
                                <p>${item.now_price*item.qty}</p>
                                <p>You Save ${item.ori_price-item.now_price}</p>
                            </td>
                            <td>
                                <i></i>
                            </td>
                        </tr>`
                }).join('');
                // console.log(total_p);
                $minus = $('.btn .minus');
                $plus = $('.btn .plus');
                $text = $('.btn .txt');
                console.log($text);
                console.log($plus);
                // 每点击一下，需要向后端发起请求，用返回值进行渲染

                // $plus.on('click',function(){
                //     $text[0].value =  ++$text[0].value;
                //     console.log($text[0].value);
                //     console.log(666);
                // })
                // $minus.on('click',function(){
                //     if($text[0].value>1){
                //         $text[0].value = --$text[0].value;
                //     }
                // })

                // function btn_num() {
                //     var btn = document.querySelector('tbody .btn');
                //     var minus = document.querySelector('.btn .minus');
                //     var txt = document.querySelector('.btn .txt');
                //     var plus = document.querySelector('.btn .plus');
                //     var _txt = txt.value;
                //     plus.onclick = function() {
                //         _txt = ++txt.value;
                //     }
                //     minus.onclick = function() {
                //         console.log(_txt);
                //         if (_txt > 1) {
                //             _txt = --txt.value;
                //             // _txt = 1;
                //             // minus.onclick = null;
                //         }
                //     }
                // }














                // ----渲染总价-------------------------
                $total_p.text(total_p);
            })

        } else {
            $nologin.show();
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

    // 判断数组中有无这个值，进行判断------------------


})