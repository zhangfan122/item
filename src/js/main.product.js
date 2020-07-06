require.config({
    paths:{
        jquery:'./jquery.min',
        product:'./lib/product',
        cookie:'./cookie'
    }
})


require(['jquery','product'],function($,product){
    product.render(function(id,price){//获取按钮，回调函数
        $('.btn1').on('click',function(){
            product.addItem(id,price,$('.shuliang').val());
        })
        let $num=$('.shuliang').val();
        $('.add').on('click',function(){
            $num++;
            if($num>=5) $num=5;
            $('.shuliang').val($num);
        })
        $('.reduce').on('click',function(){
            $num--;
            if($num<=1) $num=1;
            $('.shuliang').val($num);
        })
        

        const $tlist=$('.displaybox li');
        // console.log($tlist);//都获取的到
        const $blist=$('.smbox li img');
        let $index=0;
        $('.smbox').on('mousemove',function(e){
            $index=$blist.index($(e.target));
            if($index!=-1){
                $tlist.eq($index).show().siblings().hide();
            }
            
        })











        //放大镜
        // const $scale=$('.displaybox');//小图容器
        // const $spic=$('.displaybox li img');
        // const $sf=$('.sf');
        // const $bpic=$('.bpic');
        // const $bf=$('.bf');
        // $spic.hover(function(){
        //     $sf.css('visibility','visible');
        //     $bf.css('visibility','visible');
        //     //比例
        //     let $bili=$bpic.width()/$spic.width();
        //     $(this).on('mousemove',function(e){//this是scale
        //         let leftvalue=e.pageX-$scale.offset().left-$sf.width()/2;
        //         let topvalue=e.pageY-$scale.offset().top-$sf.height()/2;
        //         //边界管理
        //         if(leftvalue>=$scale.width()-$sf.width()) leftvalue=$scale.width()-$sf.width();
        //         if(leftvalue<=0) leftvalue=0;
        //         if(topvalue>=$scale.height()-$sf.height()) topvalue=$scale.height()-$sf.height();
        //         if(topvalue<=0) topvalue=0;
        //         $sf.css({
        //             left:leftvalue,
        //             top:topvalue
        //         })
        //         $bpic.css({
        //             left:-$bili*leftvalue,
        //             top:-$bili*topvalue
        //         })
        //     })
        // },function(){
        //     $sf.css('visibility','hidden');
        //     $bf.css('visibility','hidden');
        // })
    });
});

