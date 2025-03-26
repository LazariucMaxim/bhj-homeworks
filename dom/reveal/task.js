const reveals = document.querySelectorAll(".reveal");
for (let i=0; i<reveals.length; i++) {
    window.addEventListener("scroll", () => {
        const {top, bottom} = reveals[i].getBoundingClientRect();
        if (bottom>0 && top<window.innerHeight) {
            reveals[i].classList.add("reveal_active");
        } else {
            reveals[i].classList.remove("reveal_active");
        }
    })
}