import React from 'react'
import './Assets/Css/global.css'
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Navbar } from './Components/Navbar/Navbar'
import { Loading } from './Components/Loading/Loading'
import { Config } from './Config/Config'
import { View } from './Pages/View/View'
import Footer from './Components/Footer/Footer'
import { Cart } from './Pages/Cart/Cart'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/view/:id" element={<View />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <Loading />
      <Config />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        limit={4}
        theme="colored"
      />
    </>
  );
}
