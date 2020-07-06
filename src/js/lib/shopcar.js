let baseUrl='http://localhost/item';

define([
    'jquery',
    'cookie'
], function($,cookie) {
    return{
        render:function(callback){
            let shop=cookie.get('shop');
            if(shop){
                shop=JSON.parse(shop);
                // console.log(shop);//数组
                let idlist=shop.map(elm=>elm.id).join(','); //省略return
                // console.log(idlist);
                $.ajax({
                    type:'post',
                    url:`${baseUrl}/interfile/shop.php`,
                    data:{
                        idlist:idlist
                    },
                    dataType:'json',
                    success:function(res){
                        // console.log(res);
                        
                        let temp='';
                        res.forEach(elm=>{
                            let pic=JSON.parse(elm.url);//图片路径数组

                            //遇到的第一个问题：拿到的数据库的数据与cookie里的数据顺序是不一样的
                            //解决方案：遍历shop,进行过滤，与elm.sid(数据库中的数据id进行比较)，目的就是让cookie数组中数据顺序与数据库拿到的数据数组相同
                            let arr=shop.filter(val=>{
                                return val.id===elm.sid;
                            })
                            // console.log(arr);
                            
                            let jifen=parseInt(elm.price);
                            temp+=`
                            <tr class="prod-line tr-boeder-top">
                                <td class="check-col">
                                    <input type="checkbox" name="" id="">
                                </td>
                                <td class="prod-pic">
                                    <a href="javascript:;">
                                        <div class="figure">
                                            <img src="${pic[0]}" alt="" data-sid="${elm.sid}">
                                        </div>
                                    </a>
                                </td>
                                <td class="goods-col">
                                    <a href="javascript:;" class="goods-link">
                                        ${elm.name}红色
                                    </a><br>颜色：红色
                                </td>
                                <td class="price-col">${elm.price}</td>
                                <td>
                                    <span class="number-box">
                                        <a href="javascript:;" class="reduce-num">-</a>
                                        <input type="number" min="1" class="prod-num" value="${arr[0].num}" readonly>
                                        <a href="javascript:;" class="add-num">+</a>
                                    </span>
                                </td>
                                <td><span>0.00</span></td>
                                <td class="jifen">${elm.price*arr[0].num}</td>
                                <td class="total-price colum">${(elm.price*arr[0].num).toFixed(2)}</td>
                                <td>
                                    <a href="javascript:;" class="favorite">加入到收藏夹</a>
                                    <br>
                                    <a class="del" href="javascript:;">删除</a>
                                </td>
                            </tr>
                            `;
                        })
                        $('.retable').append(temp);
                        callback && callback();
                    }
                })
            }
        }
    }
});