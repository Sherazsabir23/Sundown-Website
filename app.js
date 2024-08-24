document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,  
  spaceBetween: 30,  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  freeMode: true,  
  freeModeMomentum: true,  

  breakpoints: {
    
    320: {
      slidesPerView: 1, 
      spaceBetween: 10,  
    },
  
    640: {
      slidesPerView: 2,  
      spaceBetween: 20,  
    },
    
    1024: {
      slidesPerView: 3, 
      spaceBetween: 30,  
    }
  },
});


document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#section1'),
      smooth: true,
    });
  });

const fixedDiv = document.querySelector(".fixed");
const hoverMain = document.querySelector(".hover-main")
 
hoverMain.addEventListener("mouseenter", ()=>{
    fixedDiv.style.display="block"

})

hoverMain.addEventListener("mouseleave", ()=>{
    fixedDiv.style.display="none"

})

const hoverContent = document.querySelectorAll(".hover-main-content");

hoverContent.forEach(function(e){
    e.addEventListener("mouseenter", ()=>{
        const imageData = e.getAttribute("data-image");
        fixedDiv.style.backgroundImage =`url(${imageData})`;
    })
})



const menu = document.querySelector(".menu");
const navBtn = document.querySelector("#nav-btn");
const menu1 = document.querySelector(".menu");
const crossbtn = document.querySelector(".cross");
function menufu(){
  navBtn.addEventListener("click", () => {
    menu.style.top = "0";
 
});

crossbtn.addEventListener("click", () => {
menu.style.top = "-100%";

});
}
menufu();







