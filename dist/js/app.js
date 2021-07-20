
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trient/") > -1;
    return is_ie;
}

if (isIE()) {
    document.querySelector("html").classList.add("ie");
}

if (isMobile.any()) {
    document.querySelector("html").classList.add("_touch");
}

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    }
});

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

