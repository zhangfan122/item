!function($){
    //一.二级侧边栏效果
    let $menuli=$('.menu li');
    let $cartlist=$('.cartlist');
    let $menu=$('.menu');
    let $item=$('.cartlist .item');
    //1鼠标移入左侧菜单，右侧框显示
    $menuli.on('mouseover',function(){
        $cartlist.show();
        //3鼠标指定的li栏添加类名active
        $(this).addClass('active').siblings('.menu li').removeClass('active');

        //5.滚动条的top值如果大于$banner盒子的top值，$cartlist的top就是前面滚动条的top值 - $banner盒子的top值
        if($(window).scrollTop()>$menu.offset().top){
            $cartlist.css({
                top:$(window).scrollTop()-$menu.offset().top
            })
        }else{
            $cartlist.css({
                top:20
            })
        }


        //4.右侧框显示不同的内容
        $item.eq($(this).index()).show().siblings('.item').hide();
    })

    $menuli.on('mouseout',function(){
        $cartlist.hide();
        $menuli.removeClass('active');
    })

    //2右侧框自身的移入移出
    $cartlist.on('mouseover',function(){
        $cartlist.show();
    })

    $cartlist.on('mouseout',function(){
        $cartlist.hide();
    })

    //二、置顶
    let $retun=$('.side li:nth-of-type(4)');
    $(window).on('scroll',function(){
        let $top=$(window).scrollTop();
        $top>=600 ? $retun.show() : $retun.hide();
    })
    
    $retun.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        })
    })

    //三、抢购区左右箭头点击事件
    let $arrowlt=$('.arrow_left');
    let $arrowgt=$('.arrow_right');
    let $purchaseCon=$('.purchase-content');
    let $conLi=$('.purchase-content li');
    let $num=$conLi.length;
    let $n=0;
    $purchaseCon.width($num*$conLi.innerWidth());
    
    $arrowgt.on('click',function(){
        $n++;
        let $plusnum=Math.floor($num-5);
        if($n>=$plusnum){
            $n=$plusnum;
        }
        $purchaseCon.animate({
            left:-($conLi.innerWidth()+13)*$n
        })
    })

    $arrowlt.on('click',function(){
        $n--;
        if($n<=0){
            $n=0;
        }
        $purchaseCon.animate({
            left:-($conLi.innerWidth()+13)*$n
        })
    })


    //四、根据本地存储，显示用户信息
    // console.log(localStorage.getItem('username'));
    if(localStorage.getItem('username')){
        $('.topbar_right_login').hide();
        $('.admin').show();
        $('.admin span').html(localStorage.getItem('username'));
    }
    $('.admin a').on('click',function(){
        $('.topbar_right_login').show();
        $('.admin').hide();
        localStorage.removeItem('username');
    })
}(jQuery);