const text = document.getElementById("text");
const colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#e9c46a"];

text.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  text.style.color = randomColor;
});

/* 🌸 桜エフェクト（画面全体に広げる + 右上→左下の風） */
function createSakura() {
  const sakura = document.createElement("div");
  sakura.classList.add("sakura");

  const size = Math.random() * 10 + 8;
  sakura.style.width = `${size}px`;
  sakura.style.height = `${size}px`;

  /* 画面全体にランダム配置 */
  sakura.style.left = Math.random() * 100 + "vw";
  sakura.style.top = Math.random() * 100 + "vh";

  /* 落下速度ランダム */
  sakura.style.animationDuration = Math.random() * 3 + 4 + "s";

  /* 自然な透明度 */
  sakura.style.opacity = Math.random() * 0.5 + 0.5;

  document.querySelector(".sakura-container").appendChild(sakura);

  setTimeout(() => {
    sakura.remove();
  }, 8000);
}

/* 桜の密度 */
setInterval(createSakura, 180);