import { checkWin } from "../../utils/functions"

interface Props {
  tile: number
  turn: boolean
  setTurn: React.Dispatch<React.SetStateAction<boolean>>
  grid: number[][]
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>
  rowIdx: number
  colIdx: number
  setWon: React.Dispatch<React.SetStateAction<boolean>>
}

const Tile = (props: Props): JSX.Element => {

  const handleClick = () => {
    if (props.tile === 1 || props.tile === 2) return

    const updatedGrid = props.grid.map(row => [...row]);
    updatedGrid[props.rowIdx][props.colIdx] = props.turn ? 1 : 2;
    props.setGrid(updatedGrid);

    if (checkWin(updatedGrid, props.rowIdx, props.colIdx, props.turn)) {  
      props.setWon(true)   
      setTimeout(() => {
        if(confirm(`Player ${props.turn ? '1' : '2'} has won`)) {
          props.setGrid([
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]])
        } else {
          props.setGrid([
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]])
        }
      }, 0)
    } else {
      props.setTurn(!props.turn)
    }
  }

  return (
    <div className={`tile ${props.tile === 1 ? 'x-tile' : props.tile === 2 ? 'y-tile' : ''}`} onClick={handleClick}> 
      {(props.tile === 1) ? 'X' : (props.tile === 2) ? 'O' : null}
    </div>
  )

}

export default Tile