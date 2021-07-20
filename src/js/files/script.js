window.onload = function () {
    document.addEventListener("click", documentActions);

    //Actions (делегирование события клик)
    function documentActions(e) {
        const targetElement = e.target;
        if (window.innerWidth > 768 && isMobile.any()) {
            if (targetElement.classList.contains("menu__arrow")) {
                targetElement.closest(".menu__item").classList.toggle("_hover");
            }
            if (
                !targetElement.closest(".menu__item") &&
                document.querySelectorAll(".menu__item._hover").length > 0
            ) {
                let deleteHover =
                    document.querySelectorAll(".menu__item._hover");
                deleteHover.forEach(function (hoverItem) {
                    hoverItem.classList.remove("_hover");
                });
            }
        }
    }
};
