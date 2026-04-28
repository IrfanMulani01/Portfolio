const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (menuBtn && menu) {
    const closeMenu = () => {
        menu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
        const isOpen = menu.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    };

    menuBtn.addEventListener("click", toggleMenu);

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}
