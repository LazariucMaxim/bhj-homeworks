const sizes = document.querySelectorAll(".font-size");
const book = document.querySelector(".book__content")
const reset_font_size = (ind, size_class) => {
    for (let i=0; i<3; i++) {
        sizes[i].classList.remove("font-size_active");
    }
    sizes[ind].classList.add("font-size_active");
    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");
    if (size_class) book.classList.add(size_class);
}
sizes[0].onclick = () => {
    reset_font_size(0, "book_fs-small");
    return false;
}
sizes[1].onclick = () => {
    reset_font_size(1, "");
    return false;
}
sizes[2].onclick = () => {
    reset_font_size(2, "book_fs-big");
    return false;
}