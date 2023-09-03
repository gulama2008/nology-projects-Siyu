const menuIcon = document.querySelector(".navbar__menu__hb");
const menu = document.querySelector('.navbar__menu__list--sm');
const body = document.querySelector('body');
const sections = document.querySelectorAll("section");
let isMenuOpen = false;

function clickOnMenuIcon() { 
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menu.style.display = 'block';
  } else { 
    menu.style.display = 'none';
  }
}
menuIcon.addEventListener('click',clickOnMenuIcon) 

// function clickOnPage() { 
//   menu.style.display = 'none';
// }
// body.addEventListener('click', clickOnPage);

sections.forEach((section) => { 
    section.classList.add('loadin')
})
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    }
  });
};
const observer = new IntersectionObserver(observerCallback, options);

sections.forEach((element) => {
  observer.observe(element);
});

