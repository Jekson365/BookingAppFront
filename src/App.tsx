import { useEffect, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

import './styles/navbar.scss'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Movie } from './pages/movie/Movie'
import { Booking } from './pages/Booking/Booking'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/movies' element={<Movie />} />
          <Route path='/booking/:id' element={<Booking />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </>
  )
}

export default App
