const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 400;

canvas.style.border = "1px solid red";
canvas.style.backgroundColor = "transparent";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let images = [];

for (let i = 1; i <= 13; i++) {
  let spriteImage = new Image();

  spriteImage.src = `./images/Walk (${i}).png`;

  spriteImage.onload = () => {
    images.push(spriteImage);
  };
}

let spriteX = 0;
let spriteY = 71;
let spriteVX = 1;
let index = 0;
let counter = 0;

function startAnimation() {
  requestAnimationFrame(animate);
}

function animate() {
  counter++;

  let sprite;

  if (counter % 8 === 0) {
    if (index >= 12) {
      index = 0;
    } else {
      index++;
    }
  }

  sprite = images[index];

  spriteX += spriteVX;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(sprite, spriteX, spriteY, 350, 350);

  requestAnimationFrame(animate);
}

window.addEventListener("load", startAnimation);
