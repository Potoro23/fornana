function changeMessage() {
  const messages = [
    "Aku cinta banget sama kamu! 💖",
    "Kamu adalah kebahagiaanku, selalu ada di pikiranku. 😘",
    "Jangan pernah ragu untuk tahu, kamu adalah segalanya. 💕",
    "Setiap detik bersamamu adalah momen yang paling indah! 🌹",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.querySelector(".message").textContent = randomMessage;
}
