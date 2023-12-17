var outBox = document.getElementById("outBox");
var time = document.getElementById("time");
var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var inner = document.getElementById("inner");
var btn_status = 0;
var hour = 0;
var min = 0;
var sec = 0;
green.addEventListener("click", ()=>{
    if (btn_status==0){
        yellow.disabled=false;
        outBox.style.backgroundColor = "#00A800";
        green.setAttribute('class', 'btn red');
        btn_status = 1;
        green.innerHTML = "STOP";
        timer = setInterval(()=>{
            sec = sec+1;
            time.innerHTML = hour+":"+min+":"+sec;

            if (sec==59){
                min = min+1;
                sec = 0;
            }

            if (min==60){
                hour = hour+1;
                min = 0;
            }

        },1000)
    }
    else{
        outBox.style.backgroundColor = "#E50000";
        green.setAttribute('class', 'btn green');
        btn_status = 0;
        green.innerHTML = "START";
        clearInterval(timer);
    }
});

yellow.addEventListener("click",()=>{
    var lap_time = hour+":"+min+":"+sec;
    inner.innerHTML+= "<br>"+lap_time;
    outBox.style.backgroundColor = "#FFD700";
    setTimeout(()=>{
        outBox.style.backgroundColor = "#00A800";
    },500);
})

red.addEventListener("click",()=>{
    outBox.style.backgroundColor = "#111111";
    sec = min = hour = 0;
    green.setAttribute('class', 'btn green');
    btn_status = 0;
    green.innerHTML = "START";
    clearInterval(timer);
    time.innerHTML = hour+":"+min+":"+sec;
    inner.innerHTML = "LAPS"
    yellow.disabled=true;
})