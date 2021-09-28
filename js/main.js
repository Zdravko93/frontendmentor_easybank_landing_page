const burgerMenu = document.querySelector('#burgerMenu');
const mobileMenu = document.querySelector('#mobileMenu');
const header = document.querySelector('.header');

burgerMenu.addEventListener("click", () => {
   if(burgerMenu.classList.contains('open')){
       burgerMenu.classList.remove('open');
       mobileMenu.classList.remove('display');
       header.classList.remove('overlay');
   } else {
       burgerMenu.classList.add('open');
       mobileMenu.classList.add('display');
       header.classList.add('overlay');
   }
});

