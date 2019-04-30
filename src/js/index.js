jQuery(function($) {

    // 点击购物车实现跳转功能
    $gouwu = $('#head .gouwu');
    // console.log($gouwu);
    $gouwu.on('click', function() {
        location.href = '../html/car2.html';
    })


    // hover 在二级导航上 对应的出现================
    $('.nav_bar').on('mouseenter', 'li', function() {
        // console.log(666);
        $('.nav_body').css('display', 'block');
        $idx = $(this).index()

        $('.nav_body .nav_item').hide().eq($idx).show();
    })
    $('.nav_bar').on('mouseleave', 'li', function() {
        $('.nav_body').css('display', 'none');

        $('.nav_body .nav_item').hide();
    })
    //  渲染头部名字=======start===================================
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
        location.href = encodeURI("html/login.html");
    })
    // =====渲染头部名字===end=============================
    // 发起ajax请求 渲染daojishi数据1  拿到数据==================
    $.ajax({
        type: 'get',
        url: '../api/index_rander.php',
        success: function(res) {

            var all = JSON.parse(res);
            // console.log(all);

            // 渲染抢购  list_item  spike
            var spike_ul = document.querySelector('.daojishi .spike_body .list_item')
            // $spike_ul = $('.daojishi .spike_body .list_item');
            // console.log(spike_ul);
            var num = 5;
            var str = "";
            for (var i = 0; i < num; i++) {
                // var spike_ul_li = document.createElement('li');
                // 渲染数据库的数据
                str += `<li data-id = '${all[i].id}'>
                                        <a href="#">
                                            <div>
                                                <span class="jd_price">¥${all[i].now_price}</span>
                                                <span class="price">¥${all[i].now_price}</span>
                                            </div>
                                            <img src="../${all[i].img}">
                                            <p class="name">${all[i].name}</p>
                                            <p class="progress">好评率99%</p>
                                            <p class="buy_btn">
                                                立即抢购
                                            </p>
                                        </a>
                                    </li>`


            }
            // console.log(str);
            spike_ul.innerHTML = str;
        }
    })

    // 发起ajax请求 渲染中间数据1  拿到数据==================

    $.ajax({
        type: 'get',
        url: '../api/index_rander.php',
        success: function(res) {

            var all = JSON.parse(res);
            // console.log(all);

            // 渲染抢购  list_item  spike
            var spike_ul = document.querySelector('.daojishi .spike_body .list_item')
            // $spike_ul = $('.daojishi .spike_body .list_item');
            // console.log(spike_ul);
            var num = 5;
            var str = "";
            for (var i = 0; i < num; i++) {
                // var spike_ul_li = document.createElement('li');
                // 渲染数据库的数据
                str += `<li data-id = '${all[i].id}'>
                                        <a href="#">
                                            <div>
                                                <span class="jd_price">¥${all[i].now_price}</span>
                                                <span class="price">¥${all[i].now_price}</span>
                                            </div>
                                            <img src="../${all[i].img}">
                                            <p class="name">${all[i].name}</p>
                                            <p class="progress">好评率99%</p>
                                            <p class="buy_btn">
                                                立即抢购
                                            </p>
                                        </a>
                                    </li>`


            }
            // console.log(str);
            spike_ul.innerHTML = str;
        }
    })


})