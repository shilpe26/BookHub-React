import "./App.css";
import {Routes, Route} from "react-router-dom";
import { Navbar,Footer } from "./components/Component";
import {Home, Cart, Product, Wishlist, Login, Signup} from "./pages/Pages";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
      </div>
      <div className="main-style">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/mock" element={<Mockman/>}></Route>
      </Routes>
      </div>
      <div>
    <Footer />
    </div>
    </div>
  );
}

export default App;
