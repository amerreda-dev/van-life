import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from '../Pages/Home.jsx'

import About from '../Pages/About.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">
            #VanLife
          </Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
