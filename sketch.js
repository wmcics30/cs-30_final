// puzzle maker
// cool library https://brm.io/matter-js/ 
// Mappa could be used to produce the maze
// p5.tiled map could also work
// 
// get map factor from open gaming art


let mazeWidth,mazeHeight = 9,cellLength = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mazeWidth = width/5;
  mazeHeight = height/9;
  cellLength = height/9;
}

function draw() {
  background('violet');
  drawMaze(mazeWidth,mazeHeight,cellLength);
}

function drawMaze(width,height,side){
  for (let y=0;y<height;y++){
    for (let x=0; x<width;x++){
      square(x*side,y*side,side);
    }
  }
}
