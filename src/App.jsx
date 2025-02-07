import "./App.css"
import Navbar from "./components/Navbar"
import Mascot from "./components/Mascot"
import VotingPanel from "./components/VotingPanel"

function App() {

  return (
    <div className="disco-cats">
    <Navbar />
    <Mascot />
    <VotingPanel />
    </div>
  )
}

export default App
