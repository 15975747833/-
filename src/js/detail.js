 $(function() {
     // 获取location传来的id====================
     $t_container = $('.main_l .fangdajing .t_container');
     $b_container = $('.main_l .fangdajing .b_container');
     // $main_r = $('.main_r');
     $sku_name = $('.sku-name');
     console.log($sku_name);
     $summary_first = $('.summary-first');
     console.log($summary_first);
     $choose_attrs = $('.choose-attrs');
     console.log($choose_attrs);
     // console.log($main_r);
     // console.log($t_container);
     var params = decodeURI(location.search).slice(1);
     console.log(params); //id=1
     var paramsArr = params.split('=');
     let id = paramsArr[1];
     $.get('../api/detail.php', { 'code': 1, 'id': id }, function(res) {
         res = JSON.parse(res)[0];
         console.log(res);
         // 渲染放大镜图片=========================================
         $t_container[0].innerHTML = `<div class="jqzoom">
                                            <img src="../${res.img}" jqimg="../${res.img}" />
                                        </div>`;
         $b_container[0].innerHTML = `<img src="../${res.img}" />
                                    <img src="../${res.img}" />
                                    <img src="../${res.img}" />
                                    <img src="../${res.img}" />
                                    <img src="../${res.img}" />`;
         // 渲染商品的数据============================================
         $sku_name[0].innerText = res.name;
         $summary_first[0].innerHTML = `<div class="summary-price-wrap">
                            <div class="summary-price J-summary-price">
                                <div class="dt">京 东 价</div>
                                <div class="dd">
                                    <span class="p-price"><span>￥</span><span class="price J-p-37938074960">${res.now_price}</span></span>
                                    <a class="notice J-notify-sale" data-type="1" data-sku="37938074960" href="#none" clstag="shangpin|keycount|product|jiangjia_2">降价通知</a>
                                </div>
                            </div>
                        </div>`;

         $choose_attrs[0].innerHTML = `<div id="choose-attr-2" class="li p-choose" data-type="规格" data-idx="0">
                            <div class="dt ">选择规格 </div>
                            <div class="dd clearfix">
                                <div class="item" data-sku="${res.id}">
                                    <b></b>
                                    <a href="#none">
                                        ${res.spec}</a>
                                </div>
                            </div>
                        </div>`;

         

         //放大镜实现js============================================
         $(".jqzoom").jqueryzoom({
             xzoom: 400, //放大图的宽度(默认是 200)
             yzoom: 400, //放大图的高度(默认是 200)
             offset: 10, //离原图的距离(默认是 10)
             position: "right", //放大图的定位(默认是 "right")
             preload: 1
         });



         //底部图片hover切换实现js========================================
         $('.b_container img').hover(function() {
             $('.jqzoom img').attr('src', $(this).attr('src'));
             $('.jqzoom img').attr('jqimg', $(this).attr('src'));
         }, function() {
             $.noop();
         });




     })






























 });