const navs = document.querySelectorAll(".tabs");
for (let i=0; i<navs.length; i++) {
    const tabs = navs[i].querySelectorAll(".tab");
    const contents = navs[i].querySelectorAll(".tab__content");
    for (let j=0; j<tabs.length; j++) {
        tabs[j].onclick = () => {
            navs[i].querySelector(".tab_active").classList.remove("tab_active");
            navs[i].querySelector(".tab__content_active").classList.remove("tab__content_active");
            tabs[j].classList.add("tab_active");
            contents[j].classList.add("tab__content_active");
        }
    }
}