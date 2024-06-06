import Grid from "./Grid/Grid"

const GameCard = (): JSX.Element => {

  const defaultGrid: number[][] = [
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0]]

  return (
    <div className="game-container">
      <Grid grid={defaultGrid} />
    </div>
  )
}

export default GameCard