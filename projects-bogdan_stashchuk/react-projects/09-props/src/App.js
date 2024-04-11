import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={4} />
      <PetInfo animal="cat" age={7} />
    </div>
  )
}

export default App
