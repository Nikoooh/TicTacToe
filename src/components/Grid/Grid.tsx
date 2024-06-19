import { useEffect, useState } from "react"
import { checkTie } from "../../utils/functions"
import Tile from "./Tile"

interface Props {
  setTurn: React.Dispatch<React.SetStateAction<boolean>>
  turn: boolean
}

const Grid = (props: Props): JSX.Element => {

  const [won, setWon] = useState<boolean>(false)
  const [grid, setGrid] = useState<number[][]>([
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]]
  )

  useEffect(() => {  
    if (!checkTie(grid) && !won) {
      setTimeout(() => {
        if(confirm('Tie game!')) {
          setGrid([
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]])
        } else {
          setGrid([
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]])
        }
      }, 0)
      
    }

  }, [grid])

  return (
    <div className="grid-container">
      {grid.map((row: number[], rowIdx: number) => {
        return (
          <div className="grid-row" key={rowIdx}>
            {row.map((tile: number, tileIdx: number) => {
              return (
                  <Tile key={tileIdx} rowIdx={rowIdx} colIdx={tileIdx} tile={tile}turn={props.turn} setTurn={props.setTurn} grid={grid} setGrid={setGrid} setWon={setWon}/>
              )  
            })}
          </div>  
        )            
      })}
    </div>
  )
}

export default Grid