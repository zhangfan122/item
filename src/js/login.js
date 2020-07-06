!function($){
    let $username=$('.username');
    let $password=$('.password');
    let $submit=$('.submit');
    let $rember=$('.rember');

    $submit.on('click',function(){
        $.ajax({
            type:'post',
            url:'http://localhost/item/interfile/login.php',
            data:{
                username:$username.val(),
                password:hex_sha1($password.val())
            },
            success:function(result){
                if(result){//查找到
                    location.href='index1.html';
                    localStorage.setItem('username',$username.val());
                }else{
                    $password.val('');
                    alert('用户名或者密码错误');
                }
            }
        })
    })


    //二、记住账号密码
    // 判断是否有cookie
    if($.cookie('username') && $.cookie('password')){
        // console.log($.cookie('username'));
        // console.log($.cookie('password'));
        $username.val($.cookie('username'));
        $password.val($.cookie('password'));
        $rember.prop('checked',true);
    }else{
        $rember.prop('checked',false);
    }


    $submit.on('click',function(){
        if($rember.prop('checked')){
            $.cookie('username',$username.val() , {  path: '/' });
            $.cookie('password',$password.val() , { path: '/' });
        }
    })

    
}(jQuery);

