!function($){
    let $w723=$('.w723');
    let $content=$('.content-info_left');
    

    $(window).on('scroll',function(){
        $('title').html($(window).scrollTop());
        if($(window).scrollTop()>=1277){//1105
            $w723.css({
                'position':'absolute',
                'top':1105
            })
            
        }else if($(window).scrollTop()>=172){
            $w723.css({
                'position':'fixed',
                'top':20
            }) 
        }else if($(window).scrollTop()<172){
            $w723.css({
                'position':'static'
            })
        }
    })

    
}(jQuery);


