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


/*carrosel-por que usar o men plus*/
const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let startX = 0;
let isDragging = false;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  e.preventDefault(); // Evita a seleção de texto durante o arrasto
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentX = e.clientX;
  const deltaX = startX - currentX;
  
  // Ajuste o valor 10 de acordo com a sensibilidade do arrasto desejada
  if (deltaX > 10 && currentIndex < carouselItems.length - 1) {
    currentIndex++;
    isDragging = false;
  } else if (deltaX < -10 && currentIndex > 0) {
    currentIndex--;
    isDragging = false;
  }
  
  const itemWidth = carouselItems[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
});

// Para suporte a dispositivos móveis (toque/swipe)
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
  const currentX = e.touches[0].clientX;
  const deltaX = startX - currentX;
  
  if (deltaX > 50 && currentIndex < carouselItems.length - 1) {
    currentIndex++;
    startX = currentX;
  } else if (deltaX < -50 && currentIndex > 0) {
    currentIndex--;
    startX = currentX;
  }
  
  const itemWidth = carouselItems[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

// Função para atualizar a largura do item com base na largura da tela
