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

let start_point = [1,1]
let end_point = [5,2]

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellLength = 30
}

function draw() {
  background('violet');
  drawMaze(cellLength);
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
    }
  }
}

function keyPressed(){
  if (key == "s"){
    solveMaze(start_point,end_point,grid)
    bestRoute(start_point,end_point)
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
  ye = end[1]
  xe = end[0]
  yi = start[1]
  x1 = start[0]

  k = grid[ye][xe];

  countBack(k,xe,ye)

}

function countBack(num,x,y){
  
  if (num != 1){
    if (grid[y][x-1] == num-1){
      countBack(num-1,y,x-1)
    }
    if (grid[y][x+1] == num-1){
      countBack(num+1,y,x+1)
    }
    if (grid[y+1][x] == num-1){
      countBack(num-1,y+1,x)
    }
    if (grid[y-1][x] == num-1){
      countBack(num-1,y-1,x)
    }
  }

 
}