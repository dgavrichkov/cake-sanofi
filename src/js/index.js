const episodes = function() {
    const controls = document.querySelectorAll(".hall-controls__item");
    console.log(controls);
    if(controls.length === 0) {
        return false;
    }
    const caret = document.querySelector(".hall-controls__caret");
    controls.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const old = Array.from(controls).find(control => control.classList.contains("is-active"));
            old.classList.remove("is-active");
            item.classList.add("is-active");
            const left = item.offsetLeft;
            caret.style.left = left + "px";
            caret.style.width = item.offsetWidth + "px";
        });
    })
};


window.addEventListener("DOMContentLoaded", function() {
    episodes();
});