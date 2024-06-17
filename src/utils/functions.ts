
export const CheckVictory = (grid: number[][], posX: number, posY: number, turn: boolean): boolean => {

  const inBounds = (x: number, y: number) => x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
  const playerValue = turn ? 1 : 2

  // Vertical
  if (
    (inBounds(posX, posY + 1) && grid[posX][posY + 1] === playerValue || inBounds(posX, posY - 1) && grid[posX][posY - 1] === playerValue) &&
    (inBounds(posX, posY + 2) && grid[posX][posY + 2] === playerValue || inBounds(posX, posY - 2) && grid[posX][posY - 2] === playerValue)
  ) {
    return true;
  }

  // Horizontal
  if (   
    (inBounds(posX + 1, posY) && grid[posX + 1][posY] === playerValue || inBounds(posX - 1, posY) && grid[posX - 1][posY] === playerValue) &&
    (inBounds(posX + 2, posY) && grid[posX + 2][posY] === playerValue || inBounds(posX - 2, posY) && grid[posX - 2][posY] === playerValue)
  ) {
    console.log(grid, posX, posY);
    return true;
  }

  // Diagonal, Top right, Bottom left

  if (
    (inBounds(posX - 1, posY + 1) && grid[posX - 1][posY + 1] === playerValue || inBounds(posX + 1, posY - 1) && grid[posX + 1][posY - 1] === playerValue) &&
    (inBounds(posX - 2, posY + 2) && grid[posX - 2][posY + 2] === playerValue || inBounds(posX + 2, posY - 2) && grid[posX + 2][posY - 2] === playerValue)
  ) {
    return true
  }

  // Diagonal, Top left, Bottom right 

  if (
    (inBounds(posX + 1, posY + 1) && grid[posX + 1][posY + 1] === playerValue || inBounds(posX - 1, posY - 1) && grid[posX - 1][posY - 1] === playerValue) &&
    (inBounds(posX - 2, posY - 2) && grid[posX - 2][posY - 2] === playerValue || inBounds(posX + 2, posY + 2) && grid[posX + 2][posY + 2] === playerValue)
  ) {
    return true
  }
  
  return false

}
