class Lunbo{
    constructor(){
        this.lunbo=$('.banner');
        this.picul=$('.banner ol');
        this.picli=this.picul.children();//5个
        this.btnli=$('.thumb-list li');//5个小圆圈
        this.leftarrow=$('.lt');
        this.rightarrow=$('.gt');
        this.progress=$('.progress');//进度条
        this.index=0;
        this.timer=null;
    }
    init(){
        let _this=this;
        this.btnli.on('click',function(){
            _this.index=$(this).index();//接受当前索引
            _this.tabswitch();
        })
        //左右箭头事件
        this.leftarrow.on('click',function(){
            _this.leftevent();
        })
        this.rightarrow.on('click',function(){
            _this.rightevent();
        })

        // 自动轮播
        this.timer=setInterval(function(){
            _this.rightarrow.click();
        },2000);

        this.lunbo.hover(function(){
            clearInterval(_this.timer);
        },function(){
            _this.timer=setInterval(function(){
                _this.rightarrow.click();
            },2000);
        })

    
    }

    tabswitch(){
        this.btnli.eq(this.index).addClass('actived').siblings('.thumb-list li').removeClass('actived');
        //图片透明度切换
        this.picli.eq(this.index).animate({
            opacity:1
        },1000).siblings('.banner ol li').animate({
            opacity:0
        },1000)
    }

    leftevent(){
        this.index--;
        if(this.index<0){
            this.index=this.btnli.length-1;
        }
        this.tabswitch();
    }

    rightevent(){
        this.index++;
        if(this.index>this.btnli.length-1){
            this.index=0;
        }
        this.tabswitch();
    }
    
}