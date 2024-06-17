import GameCard from "./components/GameCard"
import './styles/App.css'

const App = (): JSX.Element => {
 
  return (
    <div>
      <div className="banner">
        <h1>TicTacToe</h1>
      </div> 
      <div className="app-container">
        <GameCard />
      </div>   
    </div>
  )
}

export default App
