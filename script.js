
const menuBtn = document.querySelector(".menu");
const links = document.querySelector(".links");

menuBtn?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "×" : "☰";
});

links?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
    if (menuBtn) menuBtn.textContent = "☰";
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

const form = document.getElementById("enquiry");

form?.addEventListener("submit", event => {
  event.preventDefault();

  const data = new FormData(form);

  const message = [
    "Hello Akrisha Innovations, I would like to enquire about a machine.",
    `Name: ${data.get("name")}`,
    `Company: ${data.get("company") || "Not provided"}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email") || "Not provided"}`,
    `Machine: ${data.get("machine")}`,
    `Requirement: ${data.get("message") || "Please contact me."}`
  ].join("\n");

  document.getElementById("status").textContent =
    "WhatsApp is opening. Please review and send your enquiry.";

  window.open(
    "https://wa.me/917022192992?text=" +
    encodeURIComponent(message),
    "_blank"
  );
});
