setInterval(() => {
    const time  = document.querySelector("#time")
    let data = new Date();
    let hours = data.getHours()
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()
    let dat_night = "AM";
    
    if(hours > 12) {
        dat_night = "PM"
        hours = hours - 12
    }
    if(hours > 10) {
        hours = "0" + minutes;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + dat_night; 
})
