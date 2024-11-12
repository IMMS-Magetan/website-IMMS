// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add hover effect for university logos
const universityLogos = document.querySelectorAll(".logo-grid img");
universityLogos.forEach((logo) => {
  logo.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s ease";
  });

  logo.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});

// Add animation class to hero content when page loads
document.addEventListener("DOMContentLoaded", function () {
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(20px)";

  setTimeout(() => {
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
    heroContent.style.transition = "all 0.8s ease";
  }, 100);
});

// Handle Join Us button click
const joinButtons = document.querySelectorAll(".join-btn, .join-us-btn");
joinButtons.forEach((button) => {
  button.addEventListener("click", function () {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScUvXu_kqSvwk025o1AyS10luSV5wsHZBbeCao6PujdJjK8-g/viewform",
      "_blank"
    );
  });
});

// Overlay hover effect for event items
document.querySelectorAll(".event-item").forEach((eventItem) => {
  eventItem.addEventListener("mouseover", () => {
    const overlay = eventItem.querySelector(".event-overlay");
    if (overlay) overlay.style.opacity = "1";
  });
  eventItem.addEventListener("mouseout", () => {
    const overlay = eventItem.querySelector(".event-overlay");
    if (overlay) overlay.style.opacity = "0.9";
  });
});
