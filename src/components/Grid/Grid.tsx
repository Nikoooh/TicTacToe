import { useState } from "react"
import Tile from "./Tile"

interface Props {
  setTurn: React.Dispatch<React.SetStateAction<boolean>>
  turn: boolean
}

const Grid = (props: Props): JSX.Element => {

  const [grid, setGrid] = useState<number[][]>([
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]]
  )

  return (
    <div className="grid-container">
      {grid.map((row: number[], rowIdx: number) => {
        return (
          <div className="grid-row" key={rowIdx}>
            {row.map((tile: number, tileIdx: number) => {
              return (
                  <Tile key={tileIdx} rowIdx={rowIdx} colIdx={tileIdx} tile={tile}turn={props.turn} setTurn={props.setTurn} grid={grid} setGrid={setGrid}/>
              )  
            })}
          </div>  
        )            
      })}
    </div>
  )
}

export default Grid