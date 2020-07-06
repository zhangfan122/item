let baseUrl='http://localhost/item';

define(['jquery','cookie'], function($,cookie) {
    return{
        render:function(callback){
            let id=location.search.split('=')[1];//获取地址栏的id
            // console.log(id);
            $.ajax({
                type:'get',
                url:`${baseUrl}/interfile/getitem.php`,
                data:{
                    id:id
                },
                dataType:'json',
                success:function(res){
                    console.log(res);//一条数据对象
                    let pic=JSON.parse(res.url);
                    let iprice=parseInt(res.price);
                    //左侧
                    let lefttemp=`
                    <div class="w652">
                    <ul class="displaybox">
                      <div class="tags"><img src="../img/newtags.png" alt="" /></div>
                      <li><img src="${pic[0]}" alt="" /></li>
                      <li style="display: none;">
                        <img src="${pic[1]}" alt="" />
                      </li>
                      <li style="display: none;">
                        <img src="${pic[2]}" alt="" />
                      </li>
                      <li style="display: none;">
                        <img src="${pic[3]}" alt="" />
                      </li>
                      <div class="sf"></div>
                    </ul>
                    <div class="bf">
                      <img src="${pic[0]}" alt="" class="bpic">
                    </div>
                    <ul class="smbox">
                      <li><img src="${pic[0]}" alt="" /></li>
                      <li><img src="${pic[1]}" alt="" /></li>
                      <li><img src="${pic[2]}" alt="" /></li>
                      <li><img src="${pic[3]}" alt="" /></li>
                    </ul>
                  </div>
                    `;
                    $('.w723').prepend(lefttemp);
                    //右侧
                    let righttemp=`
                    <div class="right-top">
                    <h1>${res.name} 8GB+128GB 液氧</h1>
                    <p>
                      <span>【限时享24期免息，高等级会员限量加赠半年延保，积分加赠兑好礼】</span>
                      ${res.title}|超稳运动拍摄|90Hz高刷新率、180Hz高采样率屏幕|轻薄曲面屏|双模5G全网通
                    </p>
                  </div>
                  <div class="price">
                    <div class="price_left">
                      <p><span>￥</span>${res.price}</p>
                    </div>
                    <div class="price_right">
                      <span>积分</span>
                      <b>购买即送${iprice}积分</b>
                    </div>
                  </div>
                  <div class="zhichi">
                    <p>商品支持 :</p>
                    <ul>
                      <li><i class="iconfont">&#xe611;</i>花呗分期</li>
                      <li><i class="iconfont">&#xe611;</i>以旧换新</li>
                    </ul>
                  </div>
                  <dl class="right-middle">
                    <dt>版本</dt>
                    <dd>
                      <ul>
                        <li>${res.name} 12GB+256GB</li>
                        <li>${res.name} 12GB+256GB</li>
                        <li>${res.name} 12GB+256GB</li>
                        <li>${res.name} 12GB+256GB</li>
                        <li>${res.name} 12GB+256GB</li>
                      </ul>
                    </dd>
                    <dt>颜色</dt>
                    <dd>
                      <ul>
                        <li><span></span>黑镜</li>
                        <li><span></span>黑镜</li>
                        <li><span></span>黑镜</li>
                        <li><span></span>黑镜</li>
                      </ul>
                    </dd>
                  </dl>
                  <!-- 套餐 -->
                  <dl class="taocan">
                    <dt>选择套餐</dt>
                    <dd>
                      <ul>
                        <li>
                          <h2>官方标配</h2>
                        </li>
                        <li>
                          <h2>TWS Neo套餐</h2>
                          <p>
                            <span><dfn>￥</dfn>6447 </span>
                            <span>省<dfn>￥</dfn>50</span>
                          </p>
                        </li>
                        <li>
                          <h2>无线运动耳机套餐</h2>
                          <p>
                            <span><dfn>￥</dfn>6247</span>
                            <span>省<dfn">￥</dfn>50</span>
                          </p>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                  <!-- 数量 -->
                  <dl class="num">
                    <dt>数量</dt>
                    <dd>
                      <div>
                        <label class="reduce">-</label><input class="shuliang" type="number" value="1"  readonly  /><label class="add">+</label>
                      </div>
                      <span>(仅限购5件)</span>
                    </dd>
                  </dl>
                  <!-- 分期付款 -->
                  <dl class="payfor">
                    <dt>
                      <img src="../img/fenqi.png" alt="">
                      支持分期付款
                    </dt>
                    <dd>
                      <ul>
                        <li>
                          <div>
                            <h2> <i>￥</i>1432.66 x 3期 </h2>
                            <p>免息</p>
                          </div>
                          <span></span>
                        </li>
                        <li>
                          <div>
                            <h2> <i>￥</i>1432.66 x 3期 </h2>
                            <p>免息</p>
                          </div>
                          <span></span>
                        </li>
                        <li>
                          <div>
                            <h2> <i>￥</i>1432.66 x 3期 </h2>
                            <p>免息</p>
                          </div>
                          <span></span>
                        </li>
                        <li>
                          <div>
                            <h2> <i>￥</i>1432.66 x 3期 </h2>
                            <p>免息</p>
                          </div>
                          <span></span>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                  <!-- right-bottom -->
                  <div class="right-bottom">
                    <div class="selected">
                      <p>￥${res.price}</p>
                      <p>已选： ${res.name} 8GB+128GB 液氧 官方标配 1件</p>
                    </div>
                    <div class="btns">
                      <div class="btn1">加入购物车</div>
                      <div class="btn2">立即购买</div>
                    </div>
                  </div>
                    `;
                    $('.content-info_right').html(righttemp);
                    //渲染结束之后，执行回调函数
                    callback && callback(res.sid,res.price);
                }
            })
        },
        addItem:function(id,price,num){
            let product={
                id:id,
                price:price,
                num:num
            }
            //用数组来存对象，json格式
            let shop=cookie.get('shop');
            // 获取是为了判断它是否存在
            // 不存在 创建
            // 存在 修改

            if(shop){
                shop=JSON.parse(shop);
                if(shop.some(elm=>elm.id===id)){
                    shop.forEach(elm=>{
                        elm.id===id ? elm.num=num : null;
                    })
                }else{
                    shop.push(product);
                }
            }else{
                shop=[];
                shop.push(product);
            }
            cookie.set('shop',JSON.stringify(shop),1);
        }
    }
});