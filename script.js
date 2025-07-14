// Create a simple interactive button that thanks the user
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.textContent = "Click Me!";
  button.style.marginTop = "20px";
  button.style.padding = "10px 20px";
  button.style.fontSize = "1.1em";
  button.style.backgroundColor = "#007BFF";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.transition = "background-color 0.3s";

  // Change the button color on hover
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#0056b3";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#007BFF";
  });

  // Alert when the button is clicked
  button.addEventListener("click", () => {
    alert("Thanks for visiting my portfolio!");
  });

  // Append the button to the body
  document.body.appendChild(button);
});
// Intersection Observer to detect when sections are in view
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null, // Observe in the viewport
    threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const fadeInSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible'); // Add class to make it visible
        observer.unobserve(entry.target); // Stop observing after it becomes visible
      }
    });
  };

  const observer = new IntersectionObserver(fadeInSection, observerOptions);

  sections.forEach(section => {
    observer.observe(section); // Observe each section
  });
});
