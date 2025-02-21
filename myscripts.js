
console.log("loaded");

const bg = document.querySelector(".background");
const text = document.querySelector(".inner");

bg.addEventListener('click', (e) => {
    bg.classList.add("hide-bg")
    text.classList.remove("show-text")
});


text.addEventListener