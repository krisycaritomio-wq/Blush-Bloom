window.addEventListener("scroll", function () {
    const banner = document.querySelector(".banner");

    if (window.scrollY > 100) {
        banner.classList.add("pequeno");
    } else {
        banner.classList.remove("pequeno");
    }
});