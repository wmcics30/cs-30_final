// puzzle maker
// cool library https://brm.io/matter-js/ 
// Mappa could be used to produce the maze
// p5.tiled map could also work
// 
// get map factor from open gaming art
// https://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking
// website above is helpful for a maze solver

// could add more levels,
// could add sound effects
// create a class for grids, each class is a grid itself
// each class has a starting point, end point, bestRouteCoor, playerX, playerY

//https://www.baeldung.com/cs/maze-generation
//https://www.baeldung.com/cs/dijkstra


let mazeWidth,mazeHeight = 9,cellLength = 20;
let gameStart = false;

let grid = [
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
  ["+",   1, "+",   0, "+",   0,   0,   0,   0, "+"],
  ["+",   2, "+",   0, "+",   0,   0,   0,   0, "+"],
  ["+",   3, "+",   0, "+", "+", "+", "+",   0, "+"],
  ["+",   0, "+",   0,   0,   0,   0, "+",   0, "+"],
  ["+",   0, "+",   0,   0,   0,   0, "+",   0, "+"],
  ["+",   0,   0,   0,   0,   0,   0, "+",   0, "+"],
  ["+",   0, "+",   0,   0,   0,   0,   0,   0, "+"],
  ["+",   0, "+",   0,   0,   0,   0,   0,   0, "+"],
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
];

let grid2 = [
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+","+","+","+","+","+","+","+"],
  ["+",   0, "+",   0, "+", "+",   0,   0,   0,   0,  0,"+","+",  0,  0,  0,"+"],
  ["+",   0, "+",   0, "+",    0,  0, "+",  "+",  0,  0,  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0, "+",   0, "+", "+",   0,   0,"+",  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0,   0,   0,   0, "+",   0, "+","+",  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0, "+",   0,   0, "+",   0,   0,"+",  0,  0,  0,  0,  0,"+"],
  ["+",   0,   0,   0, "+", "+", "+", "+", "+",   0,"+",  0,  0,"+","+","+","+"],
  ["+", "+", "+",   0,   0,   0,   0, "+", "+", "+","+",  0,"+","+","+",  0,"+"],
  ["+",   0, "+",   0, "+", "+",   0,  "+",  0,   0,"+",  0,  0,  0,  0,  0,"+"],
  ["+",   0,   0,   0, "+",   0,   0, "+",   0, "+","+",  0,"+","+","+",  0,"+"],
  ["+",   0, "+",   0, "+", "+", "+", "+",   0,   0,  0,  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0,   0,   0,   0,   0,   0, "+","+","+","+",  0,"+",  0,"+"],
  ["+",   0, "+", "+", "+", "+", "+", "+",   0, "+",  0,  0,  0,  0,"+",  0,"+"],
  ["+",   0,   0,   0,   0,   0, "+",   0,   0, "+",  0,"+","+",  0,  0,  0,"+"],
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+","+","+","+","+","+","+","+"],
];

let bestRouteCoor = [];
let showRoute = false;

// make a class that relates endpoint to the maze
let start_point = [1,1];
let end_point = [15 ,13];

let playerX,playerY;

let gameFinished = false;
let randomMazeMode = false;
let randomMaze ;

let groundTile, wallTile, startScreen;

function preload(){
  groundTile = loadImage("assets/ground.png");
  wallTile = loadImage("assets/wall.png");
  startScreen = loadImage("assets/startScreen.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellLength = 30;
  playerX = start_point[0];
  playerY = start_point[1];
}

function draw() {
  background(startScreen);
  if (!gameStart){
    text("MAZE",width/2,height/2);
  }
  else if (randomMazeMode){
    // set randomMaze width height as fixed for now
    // set the endpoint at a fixed point somewhere in the maze
    randomMaze = generateMazeGrid(5,6,[5,6],[1,1]);
    drawMaze(cellLength,[5,6],randomMaze);
  }
  else{
    startGameWithDiffMap(cellLength,end_point,playerX,playerY,grid2);
  }
}

function generateMazeGrid(width,height,endpoint,startpoint){
  let mazeBackground = [];
  for (let y=0; y<height+2 ;y++){
    mazeBackground.push([]);
    for (let x=0; x<width+2;x++){
      if (y === 0 || y === height+1 || x === 0 || x === width+1){
        mazeBackground[y][x] = "+";
      }
      else{
        mazeBackground[y][x] = 0;
      }
    }
  }
  return mazeBackground;
}

function startGameWithDiffMap(side,end,x,y,maze){
  drawMaze(side,end,maze);
  showBestRoute();
  showPlayer(x,y);

}

function drawMaze(side,endCoor,maze){
  for (let y=0;y<maze.length;y++){
    for (let x=0; x<maze[0].length;x++){
      if (maze[y][x] === "+"){
        //fill("brown");
        image(wallTile,x*cellLength,y*cellLength,cellLength,cellLength);
      }
      else{
        //fill("white");
        image(groundTile,x*cellLength,y*cellLength,cellLength,cellLength);
      }
      //square(x*side,y*side,side);

      // code below shows things calculated number
      if (maze[y][x] !== -1 && maze[y][x] !== 0 && showRoute === true){
        // here you draw a green circle within the maze, denoting it is calculated
        fill(0,0,0);
        text(maze[y][x],x*side + side*2/5, y*side + side*2/3);
      }

      fill("lime");
      circle(endCoor[0]*side+side/2,endCoor[1]*side+side/2,side/2);
    }
  }
}

function showPlayer(x,y){ 
  fill("purple");

  //triangle((x+0.25)*cellLength,(y+0.25)*cellLength,(x+0.75)*cellLength,(y+0.25)*cellLength,(x+0.5)*cellLength,(y+.75)*cellLength);
  if (gameStart){
    rect(x*cellLength,y*cellLength,cellLength);
  }
  if (playerX === end_point[0] && playerY === end_point[1]){
    gameStart = false;
    gameFinished = true;
  }
}

function showBestRoute(){
  
  if (showRoute){
    // highlight from first element in the bestroute list

    for (let i =0;i<bestRouteCoor.length;i++){
      fill("lime");
      square(bestRouteCoor[i][1]*cellLength,bestRouteCoor[i][0]*cellLength,cellLength);
    }
    
  }
}

function keyPressed(){

  if (key === "1"&& gameStart){
    solveMaze(end_point,grid2);
    bestRoute(end_point,grid2);
    showRoute = true;
  }

  if (key === " "){
    gameStart = true;
    playerX = start_point[0];
    playerY = start_point[1];
    gameFinished = false;
    showRoute = false;
  }

  if (key === "w"){
    console.log(grid2[playerY-1][playerX] !== "+");
    if (grid2[playerY-1][playerX] !== "+"){
      playerY -= 1;
    }
  }

  else if (key === "s"){
    console.log(grid2[playerY+1][playerX] !== "+");
    if (grid2[playerY+1][playerX] !== "+"){
      playerY += 1;
    }
  }

  else if (key === "a"){
    console.log(grid2[playerY][playerX-1] !== "+");
    if (grid2[playerY][playerX-1] !== "+"){
      playerX -= 1;
    }
  }

  else if (key === "d"){
    console.log(grid2[playerY][playerX+1] !== "+");
    if (grid2[playerY][playerX+1] !== "+"){
      playerX += 1;
    }
  }
}

function solveMaze(finish,maze){
  // yi and xi are initial y and x value, ye and xe are ending x,y value

  let ye = finish[1];
  let xe = finish[0] ;
  let k = 1;

  maze[1][1] = 1;

  while (maze[ye][xe] === 0){
    spread(k,maze);
    k += 1;
  }
}

function spread(num,maze){

  // checking for the number, if white around it, assign it to be next number  
  for (let y = 0; y < maze.length;y++){
    for (let x =0; x < maze[0].length;x++){
      if (maze[y][x] === num){
        if (x < maze[0].length -1 && maze[y][x+1] === 0){
          maze[y][x+1] = num + 1;
        }
        if (y < maze.length - 1 && maze[y+1][x] === 0){
          maze[y+1][x] = num + 1;
        }
        if (x > 0 && maze[y][x-1] === 0){
          maze[y][x-1] = num + 1;
        }
        if (y > 0 && maze[y-1][x] === 0){
          maze[y-1][x] = num + 1;
        }
      }
    }
  }
    
}

function bestRoute(end,maze){
  // find the best route: in this case, there are plenty of best
  // routes, it doesn't matter which one
  // the idea here is to count backwards: starting at the end
  // and count the grid that has one less, and eventually get back
  // to starting point

  // a minor here, if pressed s twice, it keeps on adding
  // more to the list,  the issuecan be improved using set 
  // insted of list

  let ye = end[1];
  let xe = end[0];


  let k = maze[ye][xe];

  bestRouteCoor.push([ye,xe]);

  while (k !== 1){
    countBack(k,bestRouteCoor[bestRouteCoor.length-1][1],bestRouteCoor[bestRouteCoor.length-1][0],maze);
    k -= 1;
  }

}

function countBack(num,x,y,maze){

  if (maze[y][x-1] === num-1){
    bestRouteCoor.push([y,x-1]);
  }
  else   if (maze[y][x+1] === num-1){
    bestRouteCoor.push([y,x+1]);
  }

  else   if (maze[y-1][x] === num-1){
    bestRouteCoor.push([y-1,x]);
  }

  else   if (maze[y+1][x] === num-1){
    bestRouteCoor.push([y+1,x]);
  }
  
}