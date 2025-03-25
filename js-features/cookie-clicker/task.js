const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
cookie.onclick = (() => {
    let d = -50;
    return () => {
        d*=-1;
        counter.textContent++;
        cookie.height+=d;
        cookie.width+=d;
    };
})();