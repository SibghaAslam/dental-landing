const form = document.getElementById("bookingForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  msg.textContent = `Thanks ${name}! We will call you shortly.`;
  form.reset();
});