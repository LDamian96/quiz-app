import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './Componentes/Navbar'
import { Categorypage } from './PAGES/Categorypage'
import { HomePage } from './PAGES/HomePage'
import "../src/index.css"
export const AppRouter = () => {
  return (
    <>  
    <BrowserRouter>

    <Navbar/>

    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:category' element={<Categorypage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
