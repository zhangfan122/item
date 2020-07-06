!function($){
    let $user=$('.username');
    let $pass=$('.password');
    let $repass=$('.repass');
    let $email=$('.email');
    let $usernameflag=true;
    let baseUrl='http://localhost/item/interfile/';

    $user.on('blur',function(){
        if($user.val()!==''){
            $.ajax({
                type:'post',
                url:baseUrl+'register.php',
                data:{
                    username:$user.val()
                }
            }).done(function(result){
                if(!result){//不存在
                    $('.gou').html('√').css('color','green');
                    $usernameflag=true;
                }else{
                    $('.gou').html('已存在').css('color','red');
                    $usernameflag=false;
                }
            })
        }else{
            alert('请输入用户名');
        }
    })

    

    $('.os_btn').on('click',function(){
        if($user.val()==''){
            $('.gou').html('请输用户名').css('color','red');
            $usernameflag=false;
        }
        if($usernameflag && $repass.val()===$pass.val()){
            $.ajax({
                type:'post',
                url:baseUrl+'regsave.php',
                data:{
                    username:$user.val(),
                    password:hex_sha1($pass.val()),
                    email:$email.val()
                },
                success:function(){
                    location.href='http://localhost/item/src/html/login.html'
                }
            })
        }
    })
}(jQuery);