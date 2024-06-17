import { useState } from "react"
import Grid from "./Grid/Grid"

const GameCard = (): JSX.Element => {

  const [turn, setTurn] = useState<boolean>(true)

  return (
    <div className="game-container">
      <div className="players-container">
        <div className={`player1 max-width ${turn ? 'turn' : ''}`}>
          <h4>Player 1</h4>
        </div>
        <div className={`player2 max-width ${!turn ? 'turn' : ''}`}>
          <h4>Player 2</h4>
        </div>
      </div>
      <Grid setTurn={setTurn} turn={turn}/>
    </div>
  )
}

export default GameCard