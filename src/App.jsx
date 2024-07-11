import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PplaceOder from "./pages/PlaaceOder/PplaceOder";
import Footer from "./component/Footer/Footer";
import { useState } from "react";
import Loginpop from "./component/LoginPop/Loginpop";

function App() {
  const[showLogin,setShowLogin] = useState(false);
  return (
  <>  
      {
        showLogin ? <Loginpop setShowLogin={setShowLogin}/> : <></>
      }
      <div className="app">
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/oder" element={<PplaceOder/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
  );
}

export default App
