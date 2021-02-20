// puzzle maker
// cool library https://brm.io/matter-js/ 
// Mappa could be used to produce the maze
// p5.tiled map could also work
// 
// get map factor from open gaming art


let mazeWidth,mazeHeight = 9,cellLength = 20;

let grid = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1,  1, -1,  0, -1,  0,  0,  0,  0, -1],
  [-1,  0, -1,  0, -1,  0,  0,  0,  0, -1],
  [-1,  0, -1,  0, -1, -1, -1, -1,  0, -1],
  [-1,  0, -1,  0,  0,  0,  0, -1,  0, -1],
  [-1,  0, -1,  0,  0,  0,  0, -1,  0, -1],
  [-1,  0,  0,  0,  0,  0,  0, -1,  0, -1],
  [-1,  0, -1,  0,  0,  0,  0,  0,  0, -1],
  [-1,  0, -1,  0,  0,  0,  0,  0,  0, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
]

let bestRouteCoor = []
let showRoute = false;

let start_point = [1,1]
let end_point = [5,2]

let playerX,playerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellLength = 30
  playerX = start_point[0];
  playerY = start_point[1];
}

function draw() {
  background('violet');
  drawMaze(cellLength);
  showBestRoute();
  showPlayer(playerX,playerY);
}


function drawMaze(side){
  for (let y=0;y<grid.length;y++){
    for (let x=0; x<grid[0].length;x++){
      if (grid[y][x] == -1){
        fill("brown")
      }
      else{
        fill("white")
      }
      square(x*side,y*side,side);

      if (grid[y][x] != -1 && grid[y][x] != 0){
        // here you draw a green circle within the grid, denoting it is calculated
        fill(0,0,0)
        text(grid[y][x],x*side + side*2/5, y*side + side*2/3)
      }

      fill('lime')
      circle(end_point[0]*side+side/2,end_point[1]*side+side/2,side/2)
    }
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

function showPlayer(x,y){
  fill("purple");
  triangle((x+0.25)*cellLength,(y+0.25)*cellLength,(x+0.75)*cellLength,(y+0.25)*cellLength,(x+0.5)*cellLength,(y+.75)*cellLength);
}

function keyPressed(){
  
  console.log(key)

  if (key == "1"){
    solveMaze(start_point,end_point,grid)
    bestRoute(start_point,end_point)
  }
  if (key == "2"){
    solveMaze(start_point,end_point,grid)
    bestRoute(start_point,end_point)
    showRoute = true
  }

  if (key = "w"){
    console.log(grid[playerY-1][playerX] != -1)
    if (grid[playerY-1][playerX] != -1){
      playerY -= 1;
    }
  }

  else if (key = "s"){
    console.log(grid[playerY+1][playerX] != -1)
    if (grid[playerY+1][playerX] != -1){
      playerY += 1;
    }
  }

  else if (key = "a"){
    console.log(grid[playerY][playerX-1] != -1)
    if (grid[playerY][playerX-1] != -1){
      playerY -= 1;
    }
  }

  else if (key = "d"){
    console.log(grid[playerY][playerX+1] != -1)
    if (grid[playerY][playerX+1] != -1){
      playerY += 1;
    }
  }

}

function solveMaze(start,finish,grid){
  // yi and xi are initial y and x value, ye and xe are ending x,y value
  yi = start[1]
  xi = start[0]
  ye = finish[1]
  xe = finish[0] 
  k = 1
  while (grid[ye][xe] == 0){
    spread(k)
    k += 1
  }
}

function spread(num){

  // checking for the number, if white around it, assign it to be next number  
    for (let y = 0; y < grid.length;y++){
        for (let x =0; x < grid[0].length;x++){
            if (grid[y][x] == num){
                if (x < grid[0].length -1 && grid[y][x+1] == 0){
                    grid[y][x+1] = num + 1}
                if (y < grid.length - 1 && grid[y+1][x] == 0){
                    grid[y+1][x] = num + 1}
                if (x > 0 && grid[y][x-1] == 0){
                    grid[y][x-1] = num + 1}
                if (y > 0 && grid[y-1][x] == 0){
                    grid[y-1][x] = num + 1}
                }
            }
       }
    
}

function bestRoute(start,end){
  // find the best route: in this case, there are plenty of best
  // routes, it doesn't matter which one
  // the idea here is to count backwards: starting at the end
  // and count the grid that has one less, and eventually get back
  // to starting point

  // a minor here, if pressed s twice, it keeps on adding
  // more to the list,  the issuecan be improved using set 
  // insted of list

  ye = end[1]
  xe = end[0]
  yi = start[1]
  x1 = start[0]

  k = grid[ye][xe];

  bestRouteCoor.push([ye,xe]);

  while (k != 1){
    countBack(k,bestRouteCoor[bestRouteCoor.length-1][1],bestRouteCoor[bestRouteCoor.length-1][0])
    k -= 1
 }

}

function countBack(num,x,y){

  if (grid[y][x-1] == num-1){
    bestRouteCoor.push([y,x-1])
  }
  else   if (grid[y][x+1] == num-1){
    bestRouteCoor.push([y,x+1])
  }

  else   if (grid[y-1][x] == num-1){
    bestRouteCoor.push([y-1,x])
  }

  else   if (grid[y+1][x] == num-1){
    bestRouteCoor.push([y+1,x])
  }
  
}