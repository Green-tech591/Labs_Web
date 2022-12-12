let button_enter = document.querySelector('#open_Enter');

let enter = document.querySelector('.enter');

let form = document.querySelector('.form_content');

let button_close = document.querySelector('.enter_close');

button_enter.addEventListener("click", function() {
    enter.style.display = "block";
    content.style.pointerEvents = "none";
  });

button_close.addEventListener("click", function() {
    enter.style.display = "none";
    content.style.pointerEvents = "auto";
  });


let drag = form.querySelector('h3');

drag.addEventListener("mousedown", function(e) {
    let pos = form.getBoundingClientRect();
    let shiftX = e.pageX - pos.left - 150;
    let shiftY = e.pageY - pos.top - 150;

    document.onmousemove = function(e) {
        form.style.left = (e.pageX - shiftX) + "px";
        form.style.top = (e.pageY - shiftY) + "px";
    }

    document.onmouseup = function() {
        document.onmousemove = null;
    }
});