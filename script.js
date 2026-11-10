const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiryForm");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const lines = [
    "Hello Akrisha Innovations, I would like to enquire about a machine.",
    `Name: ${data.get("name")}`,
    `Company: ${data.get("company") || "Not provided"}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email") || "Not provided"}`,
    `Machine interest: ${data.get("machine")}`,
    `Requirement: ${data.get("message") || "Please contact me to discuss."}`
  ];
  const message = encodeURIComponent(lines.join("\n"));
  document.getElementById("formStatus").textContent = "Opening WhatsApp. Please review your enquiry and press Send.";
  window.open(`https://wa.me/917022192992?text=${message}`, "_blank", "noopener,noreferrer");
});
