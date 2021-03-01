// maze game

// set up grids for dfferent levels
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

// basic variables for the grid display
let mazeWidth,mazeHeight,xAlign,yAlign;
let groundTile, wallTile, startScreen;
let cellLength;
let currentGrid = grid;
let gridNumber = 0;

// variables for player
let playerX,playerY;
let start_point = [1,1];
let end_point;
let gameFinished = false;
let gameStart = false;

// varibles for custom mode
let customMode = false;
let getWidthHeight = false;
let cusWid = 0;
let cusHei = 0;
let customGrid = [];
let editGrid = false;

// variables for path finding
let bestRouteCoor = [];
let showRoute = false;

// variables for sound
let menuSound,clickSound,moveSound,finishSound;
let playMenuSound = true;

function preload(){
  // preload sounds and tile images
  groundTile = loadImage("assets/ground.png");
  wallTile = loadImage("assets/wall.png");

  menuSound = loadSound("assets/menu.mp3");
  clickSound = loadSound("assets/click.wav");
  moveSound = loadSound("assets/move.flac");
  finishSound = loadSound("assets/finish.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);

  // set up basic grid value 
  cellLength = 30;
  playerX = start_point[0];
  playerY = start_point[1];

  // plays background music
  menuSound.loop();
}

function draw() {
  background("black");

  // display menu screen when the game starts
  if (!gameStart){
    fill("gold");
    textSize(75);
    text("MAZE",width/2,height/3);
    textSize(15);
    text("Press space to play advanture mode",width/2,height/1.75);
    text("Press C to start custom mode",width/2,height/1.5);
    text('Press "`" if you want to cheat',width/2,height/1.125);
  }

  // following code runs when customMode is selected
  else if (customMode){

    // takes the user to the get_width_height screen
    if (getWidthHeight){

      // shows the custom screen for the user to enter width and height of the grid
      fill(255);
      rect(0,0,width,height);

      fill(0)
      textSize(55);
      textAlign(CENTER)
      text("ENTER WIDTH AND HEIGHT",width/2,height/3);

      textSize(20);
      textAlign(LEFT);
      text("Width",width/2 -150, height/2 + 15)
      text("Height",width/2 -150, height/2 + 65)

      textAlign(CENTER);

      // when both height and width are selected, set up the value an
      if (cusHei !== 0 && cusWid !== 0 ){
        // take the user to the grid edit screen
        getWidthHeight = false;
        editGrid = true;

        // create an empty grid in the center of the screen
        customGrid = createCusCanvas(cusWid,cusHei);
        currentGrid = customGrid;
        xAlign = width/2 - (cusWid * (cellLength+4))/2
        yAlign = height/2 - (cusHei * (cellLength+10))/2

        // hide buttons
        WidthButton.hide();
        heightButton.hide();
        inputHeight.hide();
        inputWidth.hide();
      }
    }

    else if (editGrid){
     // displayer grid for the user to edit
     drawMaze(cellLength, [cusWid,cusHei],currentGrid)
    }
    else{
      // once the user finish edit, start the game 
      startGameWithDiffMap(cellLength,end_point,playerX,playerY,currentGrid)
    }

  }

  // following code runs when advanture mode is selected
  else{

    // shows different grid based on current stage
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

    // sets up grid potion and start the game
    xAlign = width/2 - (currentGrid[0].length * (cellLength+2))/2
    yAlign = height/2 - (currentGrid.length * (cellLength+2))/2
    startGameWithDiffMap(cellLength,end_point,playerX,playerY,currentGrid);
  }
}

function keyPressed(){

  // when ` is pressed while playing, it detects and shows the best solution to the end
  if (key === "`"&& gameStart){
    finishSound.play();
    solveMaze(end_point,currentGrid);
    bestRoute(end_point,currentGrid);
    showRoute = true;
  }

  // start the advanture mode and set up variables for it
  if (key === " "){
    clickSound.play()
    bestRouteCoor = []
    gridNumber = 1;
    gameStart = true;
    playerX = start_point[0];
    playerY = start_point[1];
    gameFinished = false;
    showRoute = false;
  }

  // start custom mode and set up variables for it
  if (key === "c"){
    clickSound.play()
    bestRouteCoor = []
    customMode = true;
    getWidthHeight = true;
    gameStart = true;

    // sets up the button and input cube 
    if (getWidthHeight){

      // shows input square that gets width and height from the player
      inputWidth = createInput();
      inputWidth.position(width/2,height/2);
      inputWidth.size(50)

      inputHeight = createInput();
      inputHeight.position(width/2,height/2 + 50);
      inputHeight.size(50)

      // display button and change custom width/height value when clicked
      WidthButton  = createButton("Enter");
      WidthButton.position(width/2 + 50, height/2);
      WidthButton.mousePressed(saveWidth);
      
      heightButton  = createButton("Enter");
      heightButton.position(width/2 + 50, height/2 + 50);
      heightButton.mousePressed(saveHeight);
    }
  }

  // finishes editing mode when enter is pressed and set up varibales for the game
  if (key === "Enter" && editGrid){
    finishSound.play();
    editGrid = false;
    end_point = [cusWid,cusHei];
    playerX = 1;
    playerY = 1;
  }

  // moves the character when w, a, s, or d is pressed
  if (key === "w"){
    moveSound.play();
    if (currentGrid[playerY-1][playerX] !== "+"){
      playerY -= 1;
    }
  }

  else if (key === "s"){
    moveSound.play();
    if (currentGrid[playerY+1][playerX] !== "+"){
      playerY += 1;
    }
  }

  else if (key === "a"){
    moveSound.play();
    if (currentGrid[playerY][playerX-1] !== "+"){
      playerX -= 1;
    }
  }

  else if (key === "d"){
    moveSound.play();
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

  // set 1,1 (start position) as 1 and assign the next number to the surronding
  // grid until the finishing grid is changed

  maze[1][1] = 1;
  while (maze[ye][xe] === 0){
    spread(k,maze);
    k += 1;
  }
}

function spread(num,maze){

  // check the entire grid with given number
  for (let y = 0; y < maze.length;y++){
    for (let x =0; x < maze[0].length;x++){
      // if the number is found, assign the next number to its surronding 
      // empty grid
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

// find the best route to solve the maze
function bestRoute(end,maze){

  let ye = end[1];
  let xe = end[0];

  let k = maze[ye][xe];

  // add every grid location in the array so showBestRoute() can display it
  bestRouteCoor.push([ye,xe]);

  // counting backwards from the final point until it reache the start point
  while (k !== 1){
    countBack(k,bestRouteCoor[bestRouteCoor.length-1][1],bestRouteCoor[bestRouteCoor.length-1][0],maze);
    k -= 1;
  }

}

function showBestRoute(){
  
  // highlight all coors in the bestroute list
  if (showRoute){
    for (let i =0;i<bestRouteCoor.length;i++){
      fill("lime");
      square(bestRouteCoor[i][1]*cellLength + xAlign,bestRouteCoor[i][0]*cellLength+yAlign,cellLength);
    }
  }
}

function countBack(num,x,y,maze){

  // check surronding grid to find the next grid in the best path
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

function createCusCanvas(width,height){

  // create an template grid using user inputed width and height
  let grid = []
  for (let y=0;y<height+2;y++){
    grid.push([]);
    for (let x=0;x<width+2;x++){
      grid[y].push(0);

      // walls the outside of the grid
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

function saveWidth(){
  // set the map width when the button is clicked
  cusWid = Number(inputWidth.value());
}

function saveHeight(){
  // set the map height when the busston is clicked
  cusHei = Number(inputHeight.value());
}

function mouseClicked(){

  // only runs in edit grid screen
  if (customMode && editGrid){

    // detects which grid is clicked
    let x = Math.floor((mouseX - xAlign)/cellLength);
    let y = Math.floor((mouseY - yAlign)/cellLength);

    // changes selected grid and plays the sound effect
    if (x !== 0 && x !== currentGrid[0].length -1 && y !== 0 && y !== currentGrid.length-1){
      clickSound.play();

      if (customGrid[y][x] === 0){
        customGrid[y][x] = "+"
      }
      else{
        customGrid[y][x] = 0;
      }
    }
  }
}

function startGameWithDiffMap(side,end,x,y,maze){
  // start the game with given valuable
  drawMaze(side,end,maze);
  showBestRoute();
  showPlayer(x,y);
}

function drawMaze(side,endCoor,maze){

  // draws the maze
  for (let y=0;y<maze.length;y++){
    for (let x=0; x<maze[0].length;x++){

      // display wall and ground based on given grid
      if (maze[y][x] === "+"){
        image(wallTile,x*cellLength + xAlign,y*cellLength+ yAlign,cellLength,cellLength);
      }
      else{

        image(groundTile,x*cellLength + xAlign,y*cellLength + yAlign,cellLength,cellLength);
      }

      // shows the end position as a green circle
      fill("lime");
      circle(endCoor[0]*side+side/2+xAlign,endCoor[1]*side+side/2 + yAlign,side/2);
    }
  }
}

function showPlayer(x,y){ 
  fill("#5C6B80");

  // show player when the game is started
  if (gameStart){
    rect(x*cellLength + xAlign,y*cellLength+yAlign,cellLength);
  }

  // when the player is at the end point
  if (playerX === end_point[0] && playerY === end_point[1]){

    if (!customMode){
      // in normal mode, the player will be send to the next level
      if (gridNumber < 4){
        finishSound.play();
        gridNumber ++;
        playerX = 1;
        playerY = 1;
        bestRouteCoor = [];
      }
      // if the player finish all the lever, go back to the start menu
      if (gridNumber === 4){
        finishSound.play();
        gameStart = false;
        gameFinished = true;
      }
    }

    else{
      // in custom mode, player will be send back to the menu
      finishSound.play();
      gameStart = false;
      customMode = false;
      cusWid = 0;
      cusHei = 0;
    }
  }
}
