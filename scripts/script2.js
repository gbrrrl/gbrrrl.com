// Simple reveal animation on scroll
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting) {
entry.target.style.opacity = 1;
}
});
});

cards.forEach(card => {
card.style.opacity = 0;
card.style.transition = "opacity 1s ease-in";
observer.observe(card);
});