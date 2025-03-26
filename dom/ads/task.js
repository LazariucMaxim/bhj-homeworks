const rotators = document.querySelectorAll(".rotator");
for (let i=0; i<rotators.length; i++) {
    const cases = rotators[i].querySelectorAll(".rotator__case")
    setInterval((() => {
        let j=0;
        return () => {
            cases[j].classList.remove("rotator__case_active");
            j=(j+1)%cases.length;
            cases[j].classList.add("rotator__case_active");
        }
    })(), 1000);
}