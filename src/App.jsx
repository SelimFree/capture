import "./App.scss"
// Importing pages
import Navbar from "./components/Navbar/Navbar"
import AboutUs from "./pages/AboutUs/AboutUs"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
    </div>
  )
}

export default App
