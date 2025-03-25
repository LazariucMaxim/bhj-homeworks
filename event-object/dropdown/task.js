const dropdowns = document.querySelectorAll(".dropdown");
for (let i=0; i<dropdowns.length; i++) {
    const value = dropdowns[i].querySelector(".dropdown__value");
    const list = dropdowns[i].querySelector(".dropdown__list");
    value.onclick = () => {
        list.classList.toggle("dropdown__list_active");
    }
    const items = list.querySelectorAll(".dropdown__item");
    for (let j=0; j<items.length; j++) {
        items[j].onclick = () => {
            value.textContent = items[j].textContent;
            list.classList.remove("dropdown__list_active");
            return false;
        }
    }
}