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

const tablist = function() {
    const el = document.querySelector(".popup-tab");
    if(!el) {
        return false;
    }
    const tabControls = el.querySelectorAll(".popup-tab__control");
    const tabPanels = el.querySelectorAll(".popup-tab__tab");
    const tabCaret = el.querySelector(".popup-tab__indicator-caret");

    let activeTab = Array.from(tabControls).find(tab => tab.classList.contains("is-active"));
    let activePanel = Array.from(tabPanels).find(panel => panel.classList.contains("is-active"));

    setCaretWidth();

    tabControls.forEach(tab => {
        tab.addEventListener("click", () => {
            activeTab.classList.remove("is-active");
            activePanel.classList.remove("is-active");
            activeTab = tab;
            activePanel = Array.from(tabPanels).find(panel => panel.dataset.tabPanel === tab.dataset.tabControl);
            activeTab.classList.add("is-active");
            activePanel.classList.add("is-active");
            setCaretWidth();
        });
    });

    function setCaretWidth() {
        tabCaret.style.width = activeTab.offsetWidth + "px";
        tabCaret.style.left = activeTab.offsetLeft + "px";    
    }
}

const popupInit = function() {
    const popups = document.querySelectorAll(".popup");
    const btns = document.querySelectorAll(".js-popup"); 
    if(popups.length === 0 || btns.length === 0) {
        return false;
    }
    btns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const name = btn.dataset.popupId;
            const currPopup = Array.from(popups).find(popup => popup.dataset.popupId === name);
            currPopup.classList.add("is-active");
        });
    });
    popups.forEach(popup => {
        const close = popup.querySelector(".popup__close");
        close.addEventListener("click", (e) => {
            e.preventDefault();
            popup.classList.remove("is-active");
        });
    })
}

window.addEventListener("DOMContentLoaded", function() {
    episodes();
    tablist();
    popupInit();
});