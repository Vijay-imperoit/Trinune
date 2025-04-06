// for scroll
(function () {
    const doc = document.documentElement;
    const header = document.getElementById('site-header');
    let prevScroll = window.scrollY || doc.scrollTop;
    let prevDirection = 0;
    const threshold = 200;

    window.addEventListener('scroll', () => {
        const curScroll = window.scrollY || doc.scrollTop;
        const curDirection = curScroll > prevScroll ? 2 : 1;

        if (curDirection !== prevDirection) {
            if (curDirection === 2 && curScroll > threshold) {
                header.classList.add('hide');
                prevDirection = curDirection;
            } else if (curDirection === 1) {
                header.classList.remove('hide');
                prevDirection = curDirection;
            }
        }

        header.classList.toggle('scrolled', curScroll > threshold);
        prevScroll = curScroll;
    });
})();
// for mobile
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
const menuOverlay = document.querySelector(".menu-overlay");
const mobileMenuHead = menu.querySelector(".mobile-menu-head");
const currentMenuTitle = menu.querySelector(".current-menu-title");
let subMenu;

// Event Listeners
menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) return;
    const hasChildren = e.target.closest(".menu-item-has-children");
    if (hasChildren) showSubMenu(hasChildren);
});

goBack.addEventListener("click", hideSubMenu);
menuTrigger.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
}

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active", "slide-left");
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    currentMenuTitle.innerHTML = menuTitle;
    mobileMenuHead.classList.add("active");
}

function hideSubMenu() {
    subMenu.classList.replace("slide-left", "slide-right");
    setTimeout(() => subMenu.classList.remove("active", "slide-right"), 300);
    currentMenuTitle.innerHTML = "";
    mobileMenuHead.classList.remove("active");
}

let resizeTimeout;
window.onresize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 991 && menu.classList.contains("active")) {
            toggleMenu();
        }
    }, 300);
};