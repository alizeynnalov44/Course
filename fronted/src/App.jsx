import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./Pages/HomePage";
import AddProduct from "./Pages/AddProduct";
import NotFound from "./Pages/NotFound";
import ProductDetail from "./Pages/ProductDetail";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

function App() {


  return (
    <>

<Header/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/Notfound" element={<ProductDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
       <Footer/>
    </>
  )
}

export default App
