function clockRunner(){
    var d = new Date();
    var hour = d.getHours();
    var minute= d.getMinutes();
    var second= d.getSeconds();
    P='AM';
    if(hour>12){
        hour-=12;
        p='PM'
    }
    if(hour<10){
        hour='0' + hour;
    }
    if(minute<10){
        minute='0' + minute;
    }
    if(second<10){
        second='0'+ second;
    }
    var clock= hour + ":" + minute + ":" + second +' '+ p;
    document.getElementById('clockDisplay').textContent= clock;
    setTimeout(clockRunner,1000);
}
clockRunner();