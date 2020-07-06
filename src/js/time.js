!function(){
    var targetTime,hour,min,sec,ids;

    init();
    function init(){
        hour=document.querySelector('.time_hour');
        min=document.querySelector('.time_min');
        sec=document.querySelector('.time_sec');
        let date=new Date();
        date.setHours(date.getHours()+3);
        targetTime=date.getTime();
        ids=setInterval(enterFrame,16);
    }

    function enterFrame(){
        let date=new Date();
        var time=date.getTime();
        time=Math.round((targetTime-time)/1000);
        let hours=Math.floor(time/3600);
        let minutes=Math.floor((time%3600)/60);
        let seconds=time-hours*3600-minutes*60;
        // console.log(hours,minutes,seconds);
        hour.innerHTML=hours<10 ? '0'+hours : hours;
        min.innerHTML=minutes<10 ? '0'+minutes : minutes;
        sec.innerHTML=seconds<10 ? '0'+seconds : seconds;
    }
}();