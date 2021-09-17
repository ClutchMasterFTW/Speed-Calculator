//Global Variables

function changeInputValues() {
    var hours = document.getElementById("hour-input").value;
    var minutes = document.getElementById("minute-input").value;
    var seconds = document.getElementById("second-input").value;
    var time = 0;
    var miles = 0;
    var speed = 0;

    time = ((+hours * 3600) + (+minutes * 60) + +seconds);
    miles = document.getElementById("mile-input").value;
    miles = +miles;
    console.log("Time: " + time + " Miles: " + miles);

    if(miles == "") {
        document.getElementById("mile-input").value = 0;
    }
    if(hours == "") {
        document.getElementById("hour-input").value = 0;
    }
    if(minutes == "") {
        document.getElementById("minute-input").value = 0;
    }
    if(seconds == "") {
        document.getElementById("second-input").value = 0;
    }

    speed = ((miles * 5280) / time);
    if(speed > 0 && speed < 100) {
        speed = speed.toFixed(4);
    } else if(speed > 100 && speed < 1000) {
        speed = speed.toFixed(3);
    } else if(speed > 1000 && speed < 10000) {
        speed = speed.toFixed(2);
    }
    if(speed == Infinity || speed == NaN) {
        document.getElementById("speed").innerHTML = "0ft/sec";
    } else {
        document.getElementById("speed").innerHTML = speed + "ft/sec";
    }
}