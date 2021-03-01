// puzzle maker
// cool library https://brm.io/matter-js/ 
// Mappa could be used to produce the maze
// p5.tiled map could also work
// 
// get map factor from open gaming art
// https://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking
// website above is helpful for a maze solver

// could add sound effects
// create a class for grids, each class is a grid itself
// each class has a starting point, end point, bestRouteCoor, playerX, playerY

//https://www.baeldung.com/cs/maze-generation
//https://www.baeldung.com/cs/dijkstra


let mazeWidth,mazeHeight;
let cellLength = 20;
let gameStart = false;
let customMode = false;
let getWidthHeight = false;
let cusWid = 0;
let cusHei = 0;
let customGrid = [];
let editGrid = false;

let grid = [
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+"],
  ["+",   0, "+",   0, "+",   0,   0,   0,   0, "+"],
  ["+",   0, "+",   0, "+",   0,   0,   0,   0, "+"],
  ["+",   0, "+",   0, "+", "+", "+", "+",   0, "+"],
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
  ["+",   0, "+",   0, "+", "+",   0, "+",   0,   0,  0,  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0,   0,   0,   0, "+",   0, "+","+","+","+",  0,"+",  0,"+"],
  ["+",   0, "+", "+", "+", "+", "+", "+",   0,   0,  0,  0,  0,  0,"+",  0,"+"],
  ["+",   0,   0,   0,   0,   0, "+",   0,   0, "+",  0,"+","+",  0,  0,  0,"+"],
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+","+","+","+","+","+","+","+"],
];

let grid3 = [
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+","+","+","+","+","+","+","+","+","+","+","+","+","+"],
  ["+",   0, "+",   0, "+", "+",   0,   0,   0,   0,  0,"+","+",  0,  0,  0,"+","+","+",  0,  0,  0,"+"],
  ["+",   0, "+",   0, "+",    0,  0, "+",  "+",  0,  0,  0,"+",  0,"+",  0,  0,  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0, "+",   0, "+", "+",   0,   0,"+",  0,"+",  0,"+",  0,"+",  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0,   0,   0,   0, "+",   0, "+","+",  0,"+",  0,"+",  0,"+",  0,  0,  0,"+",  0,"+"],
  ["+",   0, "+",   0, "+",   0,   0, "+",   0,   0,"+",  0,  0,  0,  0,  0,"+","+","+",  0,"+",  0,"+"],
  ["+",   0,   0,   0, "+", "+", "+", "+", "+",   0,"+",  0,  0,"+","+","+","+",  0,  0,  0,"+",  0,"+"],
  ["+", "+", "+",   0,   0,   0,   0, "+", "+", "+","+",  0,"+","+","+",  0,  0,  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+",   0, "+", "+",   0,  "+",  0,   0,"+",  0,  0,  0,  0,  0,"+","+","+","+","+",  0,"+"],
  ["+",   0,   0,   0, "+",   0,   0,   0,   0, "+","+",  0,"+","+","+",  0,"+",  0,  0,  0,  0,  0,"+"],
  ["+",   0, "+",   0, "+", "+", "+", "+",   0,   0,  0,  0,  0,  0,"+","+","+",  0,"+",  0,"+","+","+"],
  ["+",   0, "+",   0,   0,   0,   0, "+", "+", "+","+","+","+",  0,"+",  0,  0,  0,"+",  0,"+",  0,"+"],
  ["+",   0, "+", "+", "+", "+", "+", "+", "+", "+",  0,  0,  0,  0,"+","+","+","+","+",  0,  0,  0,"+"],
  ["+",   0,   0,   0,   0,   0, "+",   0,   0, "+","+","+",  0,"+","+",  0,  0,  0,  0,"+","+",  0,"+"],
  ["+", "+", "+",  0,  "+",   0, "+", "+",   0, "+",  0,  0,  0, "+", 0,  0,  0,"+","+",  0,  0,  0,"+"],
  ["+",   0,   0,   0, "+",   0, "+",   0,   0, "+",  0, "+", 0,"+","+","+",  0,  0,"+",  0,"+","+","+"],
  ["+", "+", "+",   0, "+",   0,   0,   0,   0, "+",  0,  0,  0,  0,  0,"+",  0,"+","+",  0,  0,  0,"+"],
  ["+",   0,   0,   0, "+", "+", "+", "+",   0, "+","+","+","+",  0,  0,   0, 0,"+",  0,"+","+",  0,"+"],
  ["+",   0, "+",   0,  0 ,   0,   0,   0,   0, "+",  0,  0,  0,  0,"+",   0, 0,  0,  0,  0,"+",  0,"+"],
  ["+", "+", "+", "+", "+", "+", "+", "+", "+", "+","+","+","+","+","+","+","+","+","+","+","+","+","+"],
];

let bestRouteCoor = [];
let showRoute = false;

let start_point = [1,1];
let end_point;

let playerX,playerY;

let gameFinished = false;
let currentGrid = grid;
let gridNumber = 0;

let groundTile, wallTile, startScreen;

let input, button, greeting;

let xAlign,yAlign

let menuSound,clickSound;

function preload(){
  groundTile = loadImage("assets/ground.png");
  wallTile = loadImage("assets/wall.png");

  menuSound = loadSound("assets/menu.wav");
  clickSound = loadSound("assets/click.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER)
  cellLength = 30;
  playerX = start_point[0];
  playerY = start_point[1];
}

function draw() {
  background("black");
  if (!gameStart){
    // menuSound.play()
    fill("gold")
    textSize(75)
    text("MAZE",width/2,height/3);
    textSize(15)
    text("Press space to play advanture mode",width/2,height/1.75)
    text("Press C to start custom mode",width/2,height/1.5)
    text('Press "`" if you want to cheat',width/2,height/1.125)
  }
  else if (customMode){
    if (getWidthHeight){

      textAlign(CENTER);
      textSize(50);

      fill(255);
      rect(0,0,width,height);

      if (cusHei !== 0 && cusWid !== 0 ){
        getWidthHeight = false;
        editGrid = true;
        WidthButton.hide();
        heightButton.hide();
        inputHeight.hide();
        inputWidth.hide();
        customGrid = createCusCanvas(cusWid,cusHei);
        currentGrid = customGrid;
        xAlign = width/2 - (cusWid * (cellLength+4))/2
        yAlign = height/2 - (cusHei * (cellLength+10))/2
      }
    }

    else if (editGrid){
     // displayer grid for the user to edit
     drawMaze(cellLength, [cusWid,cusHei],currentGrid)
    }
    else{

      startGameWithDiffMap(cellLength,end_point,playerX,playerY,currentGrid)
    }

  }
  else{
    if (gridNumber === 1){
      currentGrid = grid;
      end_point = [5 ,2];
    }
    else if (gridNumber === 2){
      currentGrid = grid2;
      end_point = [15,13];
    }
    else if (gridNumber === 3){
      currentGrid = grid3;
      end_point = [21,18];
    }

    xAlign = width/2 - (currentGrid[0].length * (cellLength+2))/2
    yAlign = height/2 - (currentGrid.length * (cellLength+2))/2
    startGameWithDiffMap(cellLength,end_point,playerX,playerY,currentGrid);
  }
}

function mouseClicked(){
  let x = Math.floor((mouseX - xAlign)/cellLength);
  let y = Math.floor((mouseY - yAlign)/cellLength);
  if (customMode && editGrid){
    if (x !== 0 && x !== currentGrid[0].length -1 && y !== 0 && y !== currentGrid.length-1){

      if (customGrid[y][x] === 0){
        customGrid[y][x] = "+"
      }
      else{
        customGrid[y][x] = 0;
      }
    }
  }
}

function saveWidth(){
  // set the value to be the x,y value of the map created
  cusWid = Number(inputWidth.value());
}

function saveHeight(){
  cusHei = Number(inputHeight.value());
}

function createCusCanvas(width,height){
  let grid = []
  for (let y=0;y<height+2;y++){
    grid.push([]);
    for (let x=0;x<width+2;x++){
      console.log(x,y)
      grid[y].push(0);
      if (x === 0 || y === 0 || x == width +1 || y == height +1){
        grid[y][x] = "+";
      } 
      else{
        grid[y][x] = 0
      }
   }
  }
  return grid;
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

        image(wallTile,x*cellLength + xAlign,y*cellLength+ yAlign,cellLength,cellLength);
      }
      else{

        image(groundTile,x*cellLength + xAlign,y*cellLength + yAlign,cellLength,cellLength);
      }

      fill("lime");
      circle(endCoor[0]*side+side/2+xAlign,endCoor[1]*side+side/2 + yAlign,side/2);
    }
  }
}

function showPlayer(x,y){ 
  fill("purple");

  //triangle((x+0.25)*cellLength,(y+0.25)*cellLength,(x+0.75)*cellLength,(y+0.25)*cellLength,(x+0.5)*cellLength,(y+.75)*cellLength);
  if (gameStart){
    rect(x*cellLength + xAlign,y*cellLength+yAlign,cellLength);
  }
  if (playerX === end_point[0] && playerY === end_point[1]){
    if (!customMode){
      if (gridNumber < 4){
        gridNumber ++;
        playerX = 1;
        playerY = 1;
        bestRouteCoor = [];
      }
      if (gridNumber === 4){
        gameStart = false;
        gameFinished = true;
      }
    }
    else{
      gameStart = false;
      customMode = false;
      cusWid = 0;
      cusHei = 0;
    }
  }
}

function showBestRoute(){
  
  if (showRoute){
    // highlight all coors in the bestroute list

    for (let i =0;i<bestRouteCoor.length;i++){
      fill("lime");
      square(bestRouteCoor[i][1]*cellLength + xAlign,bestRouteCoor[i][0]*cellLength+yAlign,cellLength);
    }
    
  }
}

function keyPressed(){

  if (key === "`"&& gameStart){
    solveMaze(end_point,currentGrid);
    bestRoute(end_point,currentGrid);
    showRoute = true;
  }

  if (key === " "){
    // start the game
    bestRouteCoor = []
    gridNumber = 1;
    gameStart = true;
    playerX = start_point[0];
    playerY = start_point[1];
    gameFinished = false;
    showRoute = false;
  }

  // custom mode
  if (key === "c"){
    bestRouteCoor = []
    customMode = true;
    getWidthHeight = true;
    gameStart = true;

    // ask user for desired height/width
    if (getWidthHeight){
      inputWidth = createInput();
      inputWidth.position(width/2,height/2);
      inputWidth.size(50)

      inputHeight = createInput();
      inputHeight.position(width/2,height/2 + 50);
      inputHeight.size(50)

      // display button and change value when clicked
      WidthButton  = createButton("Enter");
      WidthButton.position(width/2 + 50, height/2);
      WidthButton.mousePressed(saveWidth);
      
      heightButton  = createButton("Enter");
      heightButton.position(width/2 + 50, height/2 + 50);
      heightButton.mousePressed(saveHeight);
    }
  }

  if (key === "Enter" && editGrid){
    editGrid = false;
    end_point = [cusWid,cusHei];
  }

  // moves the character 
  if (key === "w"){
    if (currentGrid[playerY-1][playerX] !== "+"){
      playerY -= 1;
    }
  }

  else if (key === "s"){
    if (currentGrid[playerY+1][playerX] !== "+"){
      playerY += 1;
    }
  }

  else if (key === "a"){
    if (currentGrid[playerY][playerX-1] !== "+"){
      playerX -= 1;
    }
  }

  else if (key === "d"){
    if (currentGrid[playerY][playerX+1] !== "+"){
      playerX += 1;
    }
  }
}

function solveMaze(finish,maze){

  //ye and xe are coordinat of the finishing grid, k is the value to be
  //assigned to the non-wall grid.
  let ye = finish[1];
  let xe = finish[0] ;
  let k = 1;

  // set 1,1 (start position) as 1 and assign the next number until it 
  // reach the finishing poisiton. 

  maze[1][1] = 1;
  while (maze[ye][xe] === 0){
    spread(k,maze);
    k += 1;
  }
}

function spread(num,maze){

  // checking the surronding of the grid with given number, if 
  // not a wall and no number is assigned to it, assign the next
  // int to the grid

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

  // count back from the end (finish grid) to beginning (starting coor)

  if (maze[y][x-1] === num-1){
    bestRouteCoor.push([y,x-1]);
  }
  else if (maze[y][x+1] === num-1){
    bestRouteCoor.push([y,x+1]);
  }

  else if (maze[y-1][x] === num-1){
    bestRouteCoor.push([y-1,x]);
  }

  else if (maze[y+1][x] === num-1){
    bestRouteCoor.push([y+1,x]);
  }
  
}