
import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Topnav from "./components/Topnav"
import Footer from "./components/Footer"
import Homepage from "./Pages/Homepage"
import Product from "./Pages/Product"
import Login from "./Pages/Login"

function App() {

  return (
    <>
    {location.pathname !== '/login' && <Topnav/>}
    {location.pathname !== '/login' && <Navbar/>}
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/product/" element={<Product/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    {location.pathname !== '/login' && <Footer/>}
    </>
  )
}

export default App
