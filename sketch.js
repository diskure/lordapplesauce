let img;

function preload() {
  img = loadImage("images/matt.3.jpg");
}

function setup() {
  createCanvas(800, 800);


  img.resize(100, 100);

  noSmooth();
}

function draw() {
  img.loadPixels();

  // Loop 100 times to speed up the animation.
  for (let i = 0; i < 100; i++) {
    sortPixels();
  }

  img.updatePixels();

  image(img, 0, 0, width, height);
}

function sortPixels() {
  // Get a random pixel.
  const x = random(img.width);
  const y = random(img.height - 1);

  // color of the pixels
  const colorOne = img.get(x, y);

  const colorTwo = img.get(x, y + 1);


  const totalOne = red(colorOne) + green(colorOne) + blue(colorTwo);
  const totalTwo = red(colorTwo) + green(colorTwo) + blue(colorTwo);

  // If the first total is less than the second total, swap the pixels.
  // This causes darker colors to fall to the bottom,
  // and light pixels to rise to the top.
  if (totalOne < totalTwo) {
    img.set(x, y, colorTwo);
    img.set(x, y + 1, colorOne);
  }
}