import { useEffect, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

import './styles/navbar.scss'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Movie } from './pages/movie/Movie'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/movies' element={<Movie />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </>
  )
}

export default App
