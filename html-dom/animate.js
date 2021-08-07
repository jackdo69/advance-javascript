const button = document.getElementById("roll");
button.addEventListener("click", roll);

function roll() {
  let id = null;
  const ball = document.getElementById("ball");
  let pos = 2;
  clearInterval(id);
  id = setInterval(animate, 1);
  let direction = true;

  function animate() {
    if (pos === 500) {
      direction = false;
    }
    if (direction) {
      pos += 1;
    } else {
      pos -= 1;
    }
    ball.style.left = pos + "px";
    if (pos === 0) clearInterval(id);
  }
}
