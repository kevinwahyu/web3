// Common functionality
function showToast(title, message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${title}</strong><br>${message}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleMobileMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("mobile-open");
}

// Set active nav link
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();

  // Handle form submissions
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formType = form.dataset.formType;

      if (formType === "admission") {
        showToast(
          "Application Submitted!",
          "We'll contact you within 48 hours to schedule your entrance assessment."
        );
      } else if (formType === "contact") {
        showToast(
          "Message Sent!",
          "Thank you for contacting us. We'll get back to you within 24 hours."
        );
      }

      form.reset();
    });
  });
});
