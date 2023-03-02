import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./Pages/Homepage"

function App() {

  return (
    <>
    <Navbar/>
    <div className="main">
    <HomePage />
    </div>
    <Footer />
    </>
  )
}

export default App
