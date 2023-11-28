import { useState } from 'react'
import Home from './Component/Body/Home/Home'
import About from './Component/Body/About/About'
import Contact from './Component/Body/Contact/Contact'
import Edit from './Component/Body/Edit/Edit'
import View from './Component/Body/View/View'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'



function App() {


  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route  path="/" Component={Home} />
        <Route  path="/about" Component={About} />
        <Route  path="/contact" Component={Contact} />
        <Route  path="/edit/:id" Component={Edit} />
        <Route  path="/view/:id" Component={View} />
      </Routes>
    
    </BrowserRouter>
  
    </>
  )
}

export default App
