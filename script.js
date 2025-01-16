/*=============== EXPANDED LIST ===============*/

const navExpand = document.getElementById("nav-expand"),
  navExpandList = document.getElementById("nav-expand-list"),
  navExpandIcon = document.getElementById("nav-expand-icon");

navExpand.addEventListener("click", () => {
  // Expand list
  navExpandList.classList.toggle("show-list");

  // Rotate icon
  navExpandIcon.classList.toggle("rotate-icon");
});

document.querySelector(".nav__expand-list").addEventListener("click", () => {
  navExpandList.classList.toggle("show-list");
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== Typewriter Effect ===============*/

const typedText = document.querySelector(".typed-txt");
const texts = ["Om Prajapati.", "Web Developer.", "YouTuber."];
let currentIndex = 0;
const typingDelay = 100; // Delay between each character when typing
const erasingDelay = 50; // Delay between each character when erasing
const newTextDelay = 2000; // Delay before starting to erase
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[currentIndex];

    if (isDeleting) {
        // Remove characters
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add characters
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    // Determine the delay for the next iteration
    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    // If word is complete
    if (!isDeleting && charIndex === currentText.length) {
        // Make pause at end
        typeSpeed = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Move to next word
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setTimeout(type, typeSpeed);
}

// Start the typing effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  type();
});

/*=============== RESUME DOWNLOAD ===============*/



/*=============== EMAIL JS ===============*/



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true // Animations repeat
})

sr.reveal(`.nav`, {origin: 'bottom'});
sr.reveal(`.projects-card, .services-card, .contact-info, .contact-form, .links-group`, {origin: 'bottom', interval: 200});
sr.reveal(`.title-container`, {origin: 'top'});
sr.reveal(`.home-txt-container, .about-img-container, .resume-txt-content`, {origin: 'left'});
sr.reveal(`.home-img, .about-info-container, .resume-qrcode-content`, {origin: 'right'});
