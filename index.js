const canvas = document.querySelector("canvas");
const ctxt = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 574;

ctxt.fillRect(0, 0, canvas.width, canvas.height);

colors = ["blue", "green", "pink", "red", 
"white", "yellow", "aqua", "purple"]

class Logo {
  constructor(position) {
    this.position = position;
  }

  draw(color) {
    ctxt.fillStyle = color;
    ctxt.fillRect(this.position.x, this.position.y, 100, 100);
  }
}

const randomX = Math.floor(Math.random()*924);
const randomY = Math.floor(Math.random()*476);
if (randomX%2) ++randomX;
if (randomY%2) ++randomY;
let increaseX = Math.floor(Math.random()*2);
let increaseY = Math.floor(Math.random()*2);
let colorIndex = Math.floor(Math.random()*colors.length);

const logo = new Logo({x: randomX, y: randomY});

logo.draw(colors[colorIndex]);

function animate() {
  logo.draw("black");

  if (logo.position.x === 924) increaseX = 0;
  else if(logo.position.x === 0) increaseX = 1;

  if (logo.position.y === 476) increaseY = 0;
  else if(logo.position.y === 0) increaseY = 1;
  
  if (increaseX) logo.position.x += 2;
  else logo.position.x -= 2;

  if (increaseY) logo.position.y += 2;
  else logo.position.y -= 2;

  if (logo.position.x === 0 || logo.position.y === 0 ||
    logo.position.x === 924 || logo.position.y === 476) {
      ++colorIndex;
    }
  else logo.draw(colors[colorIndex%colors.length]); 

  window.requestAnimationFrame(animate)
}

animate();