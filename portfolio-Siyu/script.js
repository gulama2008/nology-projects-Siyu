const sections = document.querySelectorAll("section");
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

