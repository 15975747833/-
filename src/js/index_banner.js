$(function() {

console.log(555)
    // 轮播图 大======================================
    $banner = $('.banner_c ul');
    $len = $banner.find('li').length;
    var idx = 0;
    $prev = $('.banner_c .prev');
    $next = $('.banner_c .next');
    $indicators = $('.banner_c .slider_indicators');
    // console.log($indicators);

    // 每隔 2s 自动播放
    banner.timer = setInterval(autoPlay, 1000);


    // 点击prev 向左移一张
    $prev.on('click', function() {
        autoPlay();

    })

    // 点击下一张 向右移一张
    $next.on('click', function() {
        idx--;
        showPic();
    })

    function autoPlay() {
        idx++;
        showPic();
    }
    // 鼠标移入 停止定时器
    $banner.on('mouseenter', function() {
        clearInterval(banner.timer);

    }).on('mouseout', function() { // 鼠标移出 开启定时器
        banner.timer = setInterval(autoPlay, 2000);
    })


    // 根据li的数量 生成小圆点
    for (var i = 0; i < $len - 1; i++) {
        var point = document.createElement('i');
        $indicators[0].appendChild(point);
    }

    // 点击小圆点，跳到目标图片
    $indicators.on('click','i',function(){
     // 点击第一个 跳到$indicators
     this.idx = $(this).index();
      $banner.css({ 'left': - 800* this.idx + 'px'})
      // console.log(666);
     // console.log();
    })


    // 自动向右播放------------------
    function showPic() {
        if (idx == $len) {
            $banner.css({ left: 0 })
            idx = 1;
        }
        if (idx == -1) {
            $banner.css({ left: -800 * ($len - 1) + 'px' })
            idx = 3;
        }
        // console.log(idx);
        // 小圆点跟随轮播图转
        // page.children[0].classList.add("active");
        if(idx==$len){
          $indicators.children('i').eq(0).css({ 'width': 24, 'border-radius': 8, 'background': 'hsla(0,0%,100%,.5)' });

        }else{
          $indicators.children('i').eq(idx).css({ 'width': 24, 'border-radius': 8, 'background': 'hsla(0,0%,100%,.5)' });

        }

        // $indicators.children('i').not(':eq(idx)').css({ 'width': 8 });

        // 当播放到最后一张时，立刻返回第0张 left改成第一张的----------
     

        // if (idx == $len - 1) {
        //     $indicators.children('i').eq(0).css({ 'width': 24, 'border-radius': 8, 'background': 'hsla(0,0%,100%,.5)' });
        //     // page.children[0].classList.add("active");
        // }


        $banner.stop().animate({
            'left': -800 * idx + 'px'
        }, 300)
    }


 

   //  // banner 数据渲染1-start----------------------------
   //  $spike_ul = $('.spike .slider .list_item');
   //  $len = 3;
   //  var idx = 1;
   //  $prev = $('.spike .slider .prev');
   //  $next = $('.spike .slider .next');
   //  $indicators = $('.spike .slider .list_item .slider_indicators');
   //  // 克隆第一个li  但是第一个不是分块
   //  console.log($spike_ul.find('li:eq(0)'));
   // $spike_ul.find('li:eq(0)').clone().appendTo($spike_ul);

   //  // console.log($indicators);

   //  // 每隔 2s 自动播放
   //  $spike_ul.timer = setInterval(autoPlay, 1000);


   //  // 点击prev 向左移一张
   //  $prev.on('click', function() {
   //      autoPlay();

   //  })

   //  // 点击下一张 向右移一张
   //  $next.on('click', function() {
   //      idx--;
   //      showPic();
   //  })

   //  function autoPlay() {
   //      idx++;
   //      showPic();
   //  }
   //  // 鼠标移入 停止定时器
   //  $spike_ul.on('mouseenter', function() {
   //      clearInterval($spike_ul.timer);

   //  }).on('mouseout', function() { // 鼠标移出 开启定时器
   //      $spike_ul.timer = setInterval(autoPlay, 2000);
   //  })


   //  // 根据li的数量 生成小圆点
   //  // for (var i = 0; i < $len - 1; i++) {
   //  //     var point = document.createElement('i');
   //  //     $indicators[0].appendChild(point);
   //  // }

   //  // 点击小圆点，跳到目标图片
   //  // $indicators.on('click','i',function(){
   //  //  // 点击第一个 跳到$indicators
   //  //  this.idx = $(this).index();
   //  //   $spike_ul.css({ 'left': - 1100* this.idx + 'px'})
   //  //   console.log(666);
   //  //  // console.log();
   //  // })


   //  // 自动向右播放------------------
   //  function showPic() {
   //      console.log(idx);
   //      // 小圆点跟随轮播图转
   //      // page.children[0].classList.add("active");
   //      // $indicators.children('i').eq(0).css({ 'width': 24, 'border-radius': 8, 'background': 'hsla(0,0%,100%,.5)' });
   //      // console.log($indicators.children('i').eq(0));
   //      $indicators.children('i').not(':eq(idx)').css({ 'width': 8 });
   //      $indicators.children('i').eq(idx).css({ 'width': 24, 'border-radius': 8, 'background': 'hsla(0,0%,100%,.5)' });

   //      // 当播放到最后一张时，立刻返回第0张 left改成第一张的----------
   //      if (idx == $len) {
   //          $spike_ul.css({ left: 0 })
   //          idx = 1;
   //      }
   //      if (idx == -1) {
   //          $spike_ul.css({ left: -1100 * ($len - 1) + 'px' })
   //          idx = 3;
   //      }

   //      // if (idx == $len - 1) {
   //      //     $indicators.children('i').eq(0).css({ 'width': 24, 'border-radius': 8, 'background': 'hsla(0,0%,100%,.5)' });
   //      //     // page.children[0].classList.add("active");
   //      // }


   //      $spike_ul.stop().animate({
   //          'left': -1100 * idx + 'px'
   //      }, 300)
   //  }
   //  // banner 数据渲染1-end--没有--------------------------





})