var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-hotel-form");
var arrival = document.querySelector("[name=arrival-date]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
    arrival.focus();
});