var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-hotel-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
});