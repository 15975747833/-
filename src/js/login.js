$(function() {
    // 手机 账号tab切换=================
    // 给第一个默认样式
    $('.tab_l span').css({ 'color': '#e4393c', 'font-weigth': 'bold' });
    $('.tab .tab_l').on('click', function() {

        $('.box_1').show();
        $('.tab_l span').css({ 'color': '#e4393c', 'font-weigth': 'bold' });

        $('.box_2').hide();
        $('.tab_2 span').css({ 'color': '#666', 'font-weigth': 'bold' });



    })

    $('.tab .tab_r').on('click', function() {
        console.log(6333);

        $('.box_2').show();
        $('.tab_2 span').css({ 'color': '#e4393c', 'font-weigth': 'bold' });

        $('.box_1').hide();
        $('.tab_l span').css({ 'color': '#666', 'font-weigth': 'bold' });

    })

    // 验证登陆==============================
    $uname = $('form .uname');
    $psw = $('form .psw');
    $btn = $('form .btn a');
    $tip = $('.box_2 .tip');

    $uname.on('focus', function() {
        $tip.hide();
    })


    $btn.on('click', function() {

        $.post('../api/login.php', { 'uname': $uname[0].value, 'psw': $psw[0].value }, function(res) {
            res = JSON.parse(res);
            if (res == 'false') {
                // 清空并重新聚焦--------------------
                $uname[0].value = '';
                $uname[0].focus();

                $psw[0].value = '';
                $psw[0].focus();
                // 显示提示框-------------------
                $tip.show();

            } else {
                console.log(666);
                // console.log(res);
                $tip.hide();
                // var uid = res.uid;
                var currrentUname = res.uname;
                // 将获取的uname存入cookie
                var d = new Date();
                d.setHours(d.getHours() + 24);
                document.cookie = "uname=" + res.uname + "; expires=" + d.toUTCString() + "; path=/";
                // document.cookie = "uid=" + res.uid + "; expires=" + d.toUTCString() + "; path=/";
                
                alert('恭喜登陆成功！');
                // 跳转到首页
                location.href = encodeURI("../index.html");
            }
            // 15975747833
        });
    })




})