const timer = document.getElementById("timer");
const interval = setInterval(() => {
    timer.textContent--;
    if (timer.textContent==0) {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
    }
}, 1000)