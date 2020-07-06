require.config({
    paths:{
        jquery:'./jquery.min',
        shopcar:'./lib/shopcar',
        cookie:'./cookie'
    }
})

require(['jquery','shopcar','cookie'],function($,shopcar,cookie){
    shopcar.render(function(){
        //注意：这里不是用jquery来做得

        let num=null;
        let sid=null;
        let retable=document.querySelector('.retable');

        let red=document.querySelector('.red');
        let total=Array.from(document.querySelectorAll('.prod-num'));

        let singleprice=document.querySelector('.total-price');//单个item总价
        let danjia=document.querySelector('.price-col');//单价


        let large=document.querySelector('.large');
        let small=document.querySelector('.small');
        let tp=Array.from(document.querySelectorAll('.total-price'));

        let clearall=document.querySelector('.clearall');
        let trs=document.querySelector('.prod-line');//tr
        //所有的复选框
        let cks=document.querySelectorAll('input[type="checkbox"]');
        
        let deltrue=document.querySelector('.deltrue');
        

        init();
        function init(){
            retable.onclick=function(ev){//1.点击+-修改数量
                ev=ev || window.event;
                if(ev.target.className==='add-num'){
                    num=ev.target.parentNode.children[1].value;
                    num++;
                    if(num>=5) num=5;
                    ev.target.parentNode.children[1].value=num;
                    changenum(ev);
                    countsum();
                    countprice(ev,num);
                    changejifen(ev,num);//改积分
                    countToprice();
                }else if(ev.target.className==='reduce-num'){
                    num=ev.target.parentNode.children[1].value;
                    num--;
                    if(num<=1) num=1;
                    ev.target.parentNode.children[1].value=num;
                    changenum(ev);
                    countsum();
                    countprice(ev,num);
                    changejifen(ev,num);//改积分
                    countToprice();
                }else if(ev.target.className==='del'){//删除单个item
                    sid=ev.target.parentNode.parentNode.children[1].children[0].children[0].children[0].dataset.sid;
                    let shop=cookie.get('shop');
                    shop=JSON.parse(shop);
                    let arr=shop.filter(elm=>{
                        return elm.id!==sid;
                    });
                    cookie.set('shop',JSON.stringify(arr),1);
                    retable.removeChild(ev.target.parentNode.parentNode);
                }
                
            }
            //清空购物车
            clearall.addEventListener('click',clearHandler);

            //单选和全选 jquery写法
            cks=Array.from(cks);
            allb=cks.pop();//all下
            allt=cks.shift();//all上
            allt.onclick=clickHandler;
            allb.onclick=clickHandler;
            cks.forEach(item=>{
                item.onclick=function(){
                    let arr=cks.filter(elm=>elm.checked);
                    if(arr.length===cks.length){
                        allb.checked=true;
                        allt.checked=true;
                    }else{
                        allb.checked=false;
                        allt.checked=false;
                    }
                }
            })


            
            //删除选中商品
            // deltrue.addEventListener('click',deltrueHandler);
            
            



            //不点击的时候先点击一次
            countsum();
            // countprice();
            countToprice();
        }

        //1.重新修改cookie
        function changenum(ev){
            sid=ev.target.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[0].dataset.sid;
            let shop=cookie.get('shop');
            shop=JSON.parse(shop);
            let arr=shop.map(elm=>{
                if(elm.id===sid){
                    elm.num=String (num);
                };
                return elm;
            })
            // console.log(arr);//修改后的新数组
            cookie.set('shop',JSON.stringify(arr),1);
        }
        

        //2.计算商品总数量
        function countsum(){
            let totalnum=total.reduce((value,elm)=>{
                return value+Number(elm.value);
            },0);
            // console.log(totalnum);//得到数量总数
            red.innerHTML=totalnum;
        }
        
        //3.改变每项商品的总价
        function countprice(ev,num){
            ev.target.parentNode.parentNode.parentNode.children[7].innerHTML=(Number(ev.target.parentNode.parentNode.parentNode.children[3].innerHTML)*num).toFixed(2);
        }

        //5.改积分
        function changejifen(ev,num){
            ev.target.parentNode.parentNode.parentNode.children[6].innerHTML=Number(ev.target.parentNode.parentNode.parentNode.children[3].innerHTML)*num;
        }

        //4.计算商品总价
        function countToprice(){
            let totalprice=tp.reduce((value,elm)=>{
                return value+Number(elm.innerText);
            },0);
            large.textContent=totalprice.toFixed(2);
            small.textContent=totalprice.toFixed(2);
        }
        
        //清空购物车
        function clearHandler(){
            cookie.remove('shop');
            retable.innerHTML='';
        }

        //删除选中的商品
        // function deltrueHandler(){
        //     if()
        // }

        //单选和全选
        function clickHandler(){
            cks.forEach(elm=>{
                elm.checked=this.checked;
            })
        }
    });
})