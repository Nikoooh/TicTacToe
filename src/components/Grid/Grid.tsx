import Tile from "./Tile"

const Grid = ({ grid }: {grid: number[][]}): JSX.Element => {
  
  return (
    <div className="grid-container">
      {grid.map((row: number[]) => {
        return (
          <div className="grid-row">
            {row.map((tile: number, tileIdx: number) => {
              return (
                  <Tile tile={tile} key={tileIdx}/>
              )  
            })}
          </div>  
        )            
      })}
    </div>
  )
}

export default Grid