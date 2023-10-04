class MobileNavbar {
    constructor(iconMenu, listmenu, navLinks) {
        this.menu = document.querySelector(iconMenu);
        this.navList = document.querySelector(listmenu);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this); // Correção aqui
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.menu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".material-symbols-outlined",
    ".listmenu",
    ".listmenu li"
);

mobileNavbar.init();
