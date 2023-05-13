import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Topnav from "./components/Topnav"
import Footer from "./components/Footer"
import Homepage from "./Pages/Homepage"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Error from "./Pages/Error"
import { fetchProduct } from "./store/productSlice/productSlice";

const WithoutNavFooter = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const WithNavFooter = () => {
  return (
    <>
      <Topnav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {

  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProduct())
  },[dispatch])

  return (
    <>
      <Routes>
        <Route element={<WithoutNavFooter />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<WithNavFooter />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
