let baseUrl='http://localhost/item';

define(['jquery'], function($) {
    return{
        render:function(){
            $.ajax({
                type:'get',
                url:`${baseUrl}/interfile/getall.php`,
                dataType:'json',
                success:function(res){
                    console.log(res);
                    let temp='';
                    res.forEach(elm=>{
                        // console.log(elm);
                        let pic=JSON.parse(elm.url);//图片路径数组
                        //通过网址传id，告知详情页点击的是各一个数据
                        temp+=`
                        <li class="box">
                            <a href="${baseUrl}/src/html/detail.html?id=${elm.sid}">
                                    <img src="${pic[0]}">
                            </a>
                            <p class="box-name">${elm.name}</p>
                            <p class="box-feature">${elm.title}</p>
                            <p class="box-price"><i>￥</i>${elm.price}</p>
                        </li>
                        `;
                    })
                    $('.parts-list').html(temp);
                }
            })
        }
    }
});