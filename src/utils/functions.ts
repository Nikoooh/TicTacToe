
const inBounds = (grid: number[][], x: number, y: number): boolean => {
  const N = grid.length;
  return x >= 0 && x < N && y >= 0 && y < N;
}

export const checkWin = (grid: number[][], posX: number, posY: number, turn: boolean): boolean => {
  const directions = [
    { x: 1, y: 0 },  
    { x: 0, y: 1 },
    { x: 1, y: 1 },  
    { x: 1, y: -1 }  
  ];

  const playerValue = turn ? 1 : 2
  
  for (const { x: dx, y: dy } of directions) {
    let count = 1;

    for (let step = 1; step <= 2; step++) {
      const nx = posX + step * dx;
      const ny = posY + step * dy;
      if (inBounds(grid, nx, ny) && grid[nx][ny] === playerValue) {
         count++;
      } else {
         break;
      }
    }

    for (let step = 1; step <= 2; step++) {
      const nx = posX - step * dx;
      const ny = posY - step * dy;
      if (inBounds(grid, nx, ny) && grid[nx][ny] === playerValue) {
        count++;
      } else {
         break;
      }
    }

    if (count >= 3) {  
      console.log("Runs?"); 
      return true;
    }
  }

  return false;
}

export const checkTie = (grid: number[][]) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        return true
      }
    }
  }

  return false

}
