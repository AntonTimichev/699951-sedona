var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".search-hotel-form");
var arrival = popup.querySelector("[name=arrival-date]");
var form = document.querySelector(".search");
var departure = popup.querySelector("[name=departure-date]");


link.addEventListener("click", function (evt) {
        evt.preventDefault();
    
        popup.classList.toggle("form-show");
        arrival.classList.remove("modal-error");
        departure.classList.remove("modal-error");
        arrival.focus();
});

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value ) {
        evt.preventDefault();
        
        arrival.classList.remove("modal-error");
        arrival.offsetWidth = arrival.offsetWidth;
        arrival.classList.add("modal-error");
        departure.classList.remove("modal-error");
        departure.offsetWidth = departure.offsetWidth;
        departure.classList.add("modal-error");
        
        setTimeout(function() {arrival.focus();}, 700);
    } 
});
