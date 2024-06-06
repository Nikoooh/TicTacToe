import GameCard from "./components/GameCard"
import './styles/App.css'

const App = (): JSX.Element => {
 
  return (
    <div className="app-container">
      <h1>TicTacToe</h1>
      <GameCard />
    </div>
  )
}

export default App
