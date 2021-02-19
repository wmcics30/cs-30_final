# maze

maze = [[0,0,-1,-1,0],
        [-1,0,-1,0,0],
        [-1,0,-1,0,-1],
        [-1,0,0,0,-1],
        [-1,0,-1,-1,0],
        [-1,0,0,0,0],
        [-1,-1,-1,-1,-1]]

# starting at 0,0, end at 4,0

starting_point = [0,0] # first index is x, second is y
end_point = [4,0]
    
def spread(num):
    global maze
    
    for y in range(len(maze)):
        for x in range(len(maze[0])):
            if maze[y][x] == num:
                if x < len(maze[0]) -1 and maze[y][x+1] == 0:
                    maze[y][x+1] = num + 1
                if y < len(maze) - 1 and maze[y+1][x] == 0:
                    maze[y+1][x] = num + 1
                if x > 0 and maze[y][x-1] == 0:
                    maze[y][x-1] = num + 1
                if y > 0 and maze[y-1][x] == 0:
                    maze[y-1][x] = num + 1
                    
maze[0][0] = 1 

k = 1
while maze[0][4] == 0:
    
    spread(k)
    k += 1
    
    
for i in range(len(maze)):
    print(maze[i])

