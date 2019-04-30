$(function() {
    $res_name = $('.step2-wrap #form-account');
    $res_psw = $('.step2-wrap #form-psw');
    $res_confirm = $('.step2-wrap #form-confirm');
    $res_email = $('.step2-wrap #form-email');
    $res_btn = $('.step2-wrap .btn-register');
    console.log($res_btn);
    $name_tip = $('.uname_tip');
    $psw_tip = $('.psw_tip');
    $confirm_tip = $('.confirm_tip');
    $email_tip = $('.email_tip');
    console.log($name_tip);

    console.log($res_confirm);
    console.log($res_email);
    console.log($res_btn);


    // 15975747833
    // -----------------------------------------------
    $res_name.on('blur', function() {
        // 4-20位
        if (/\w{4,20}/.test($res_name[0].value)) {
            // console.log('用户名可用');
            $.post('../api/res.php', { 'code': 1, 'uname': $res_name[0].value }, function(res) {
                res = JSON.parse(res);
                if (res == true) {

                    $name_tip[0].innerText = '你的用户名可以注册';
                    $res_psw[0].focus();
                } else {

                    $name_tip[0].innerText = '你的用户名太抢手了，请重新写一个';

                }
            })
        } else {
            $name_tip[0].innerText = '你输入的用户名格式有误';
            $res_name[0].value = '';
            $res_name[0].focus();

        }
    })

    $res_name.on('focus', function() {
        $name_tip[0].innerText = '';
        $res_name[0].value = "";
    })

    // -----------------------------------------
    $res_psw.on('blur', function() {
        // 以子母开头 6-20位
        if (/^[a-z]\w{5,19}/.test($res_psw[0].value)) {
            // console.log('密码可用');
            $psw_tip[0].innerText = '密码可用';
            $res_confirm[0].focus();
        } else {
            console.log('你的密码有误');
            $psw_tip[0].innerText = '密码不规范';
            // $res_psw[0].value = "";
        }
    })

    $res_psw.on('focus', function() {
        $res_psw[0].value = "";
        $psw_tip[0].innerText = '';
    })

    $res_confirm.on('blur', function() {
        // 以子母开头 6-20位
        if ($res_confirm[0].value == $res_psw[0].value) {
            $confirm_tip[0].innerText = '两次输入的密码一致';
            // console.log('两次输入的密码一致');
        } else {
            $confirm_tip[0].innerText = '两次输入的密码不一致';
            $res_psw[0].value = "";
            $res_confirm[0].value = "";
            // console.log('两次输入的密码不一致');
        }
    })

    // -------------------------------
    $res_email.on('blur', function() {
        console.log(666);
        if (!/^[a-zA-Z][\w\-]*@[\da-z\-]{1,63}(?:\.[a-z]{2,})+$/.test($res_email[0].value)) {
            $email_tip[0].innerText = '你的邮箱可用';
        } else {
            $email_tip[0].innerText = '你的邮箱不可用';
        }
    })

    $res_email.on('focus', function() {
        $email_tip[0].innerText = '';
        $res_email[0].value = "";
    })
    // ------------------------------------
    $res_btn.on('click', function(e) {
        if ($res_name[0].value == "" || $res_psw[0].value == "" || $res_email[0].value == "") {
            alert('用户名|密码|邮箱 不能为空');
            e.preventDefault();
            return false;
        } else {
            // 提交
            $.post('../api/res.php', { 'code': 2, 'uname': $res_name[0].value, 'psw': $res_psw[0].value, 'email': $res_email[0].value }, function(res) {
                res = JSON.parse(res);
                var currrentUname = res.uname;
                // 将获取的uname存入cookie
                var d = new Date();
                d.setHours(d.getHours() + 24);
                document.cookie = "uname=" + res.uname + "; expires=" + d.toUTCString() + "; path=/";
                document.cookie = "uid=" + res.uid + "; expires=" + d.toUTCString() + "; path=/";

                alert('恭喜登陆成功！');
                // 跳转到首页
                location.href = encodeURI("../index.html");

                // } 
            })
        }
    })


})





















// var cookieItem = document.cookie;
//     cookieItem = cookieItem.split('; ');
//     var uname = cookieItem[0].split('=');
//     console.log(uname);
//     // 拿到 uid ------------------------
//     var uid = cookieItem[1].split('=');


// console.log([0].split('='));
// 判断数组中有无这个值，进行判断------------------
// if (uname[0] == 'uname') {
//     $rander_name_login_in.text(uname[1]).css({ 'color': 'red' });
//     $rander_name_login_out.text('退出');
// }