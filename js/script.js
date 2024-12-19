'use strict';
//Variables
const sections = document.querySelectorAll('section');
//functions
const fnSectionObs = function (e, o) {
  console.log(e);
  e.forEach(section => {
    if (!section.isIntersecting) return;
    section.target.classList.remove('section--hidden');
    o.unobserve(section.target);
  });
};
const sectionObs = new IntersectionObserver(fnSectionObs, {
  root: null,
  threshold: 0, //10%
  //   rootMargin: '280px',
});
sections.forEach(s => {
  sectionObs.observe(s);
  s.classList.add('section--hidden');
  s.style.transition = 'transform 1s, opacity 1s';
});
