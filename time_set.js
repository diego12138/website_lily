function timer(){
    var start = new Date(2023, 6, 19, 13, 33);
    var t = new Date() - start;
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    if(h < 10){
        h = "0" + h;
    }
    var m = Math.floor(t / 1000 / 60 % 60);
    if(m < 10){
        m = "0" + m;
    }
    var s = Math.floor(t / 1000 % 60);
    if(s < 10){
        s = "0" + s;
    }
    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}
timer();
setInterval(timer, 1000);