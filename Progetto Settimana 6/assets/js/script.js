
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}


themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
});


const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const projectType = document.getElementById("projectType").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !projectType || !message) {
      alert("Per favore, completa tutti i campi.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Per favore, inserisci un'email valida.");
      return;
    }

    alert("Grazie! Il tuo messaggio è stato inviato.");
    contactForm.reset();
  });
}
