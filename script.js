gsap.registerPlugin(ScrollTrigger);

// HERO TEXT ANIMATION
gsap.from(".reveal", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power4.out"
});

gsap.from(".fade", {
  opacity: 0,
  delay: 1,
  duration: 1
});

// CARDS SCROLL ANIMATION
gsap.to(".card", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%"
  },
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2
});

// SMOOTH SCROLL (NAV LINKS)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});