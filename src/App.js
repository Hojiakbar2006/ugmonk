import React from 'react'
import './Assets/Css/global.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Navbar } from './Components/Navbar/Navbar'
import { Loading } from './Components/Loading/Loading'
import { Config } from './Config/Config'
import { View } from './Pages/View/View'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/view/:id" element={<View/>} />
      </Routes>
      <Loading/>
      <Config/>
    </>
  );
}
