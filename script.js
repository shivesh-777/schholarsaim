const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
  }
});

const storyTrack = document.querySelector(".story-track");
const storySlides = [...document.querySelectorAll(".story-slide")];
let activeStory = 0;

document.querySelectorAll(".story-arrow").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction === "next" ? 1 : -1;
    activeStory = (activeStory + direction + storySlides.length) % storySlides.length;
    storyTrack.style.transform = `translateX(-${activeStory * 100}%)`;
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  document.querySelector(".form-status").textContent = `Thanks, ${name}. This demo form is ready to connect to an admissions inbox.`;
});

document.querySelector("#year").textContent = new Date().getFullYear();