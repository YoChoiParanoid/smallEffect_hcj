const searchBarContainerEl = document.querySelector('.search-bar-container');

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", (event) => {
    searchBarContainerEl.classList.toggle("active");
});