const holes = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
for (let i=0; i<9; i++) {
    holes[i].onclick = () => {
        if (holes[i].classList.contains( 'hole_has-mole' )) {
            if (++dead.textContent==10) {
                alert("Победа!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else if (++lost.textContent==5) {
            alert("Вы проиграли!");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}