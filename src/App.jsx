import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import '../src/App.css'
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
const App = () => {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}
export default App
