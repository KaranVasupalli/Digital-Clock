const clock = document.getElementById('clock');

function timeNow() {
    const currentDate = new Date().toLocaleTimeString();
    clock.innerText = currentDate;
}

setInterval(timeNow, 1000);