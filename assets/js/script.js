// Chọn nút btn-next và btn-prev
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

btnNext.addEventListener("mousedown", () => {
    btnNext.classList.add("clic");
});

btnNext.addEventListener("mouseup", () => {
    btnNext.classList.remove("clic");
});

btnPrev.addEventListener("mousedown", () => {
    btnPrev.classList.add("clic");
});

btnPrev.addEventListener("mouseup", () => {
    btnPrev.classList.remove("clic");
});

btnNext.onclick = () => {
    let list = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(list[0]);
}

btnPrev.onclick = () => {
    let list = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(list[list.length - 1]);
}