function calculateSquare(num) {
  return num * num;
}

let globalVar = "🌍 I am global";

function scopeDemo() {
  let localVar = "🔒 I am local";
  return `${globalVar} | ${localVar}`;
}

document.getElementById("calcBtn").addEventListener("click", () => {
  const result = calculateSquare(5);
  document.getElementById("functionResult").textContent = `Square of 5 is ${result}`;
});

document.getElementById("scopeBtn").addEventListener("click", () => {
  document.getElementById("functionResult").textContent = scopeDemo();
});

function toggleAnimation(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.toggle(className);
  return element.classList.contains(className);
}

document.getElementById("animateBtn").addEventListener("click", () => {
  const isAnimating = toggleAnimation("boxToAnimate", "animate");
  console.log(`Animation active: ${isAnimating}`);
});
