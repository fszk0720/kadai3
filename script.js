const text = document.getElementById("text");
const colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#e9c46a"];

text.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  text.style.color = randomColor;
});
