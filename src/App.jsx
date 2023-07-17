import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import '../server'
import About from '../Pages/About.jsx'
import Vans from '../Pages/Vans/Vans'
import VanDetail from '../Pages/Vans/VanDetail'
import Layout from '../components/Layout'
import Dashboard from '../Pages/Host/Dashboard'
import Income from '../Pages/Host/Income'
import Reviews from '../Pages/Host/Reviews'
import HostLayout from '../components/HostLayout'
import HostVans from '../components/HostVans'
import HostVanDetail from '../components/HostVanDetail'
import HostVanInfo from '../Pages/Host/HostVanInfo'
import HostVanPhotos from '../Pages/Host/HostVanPhotos'
import HostVanPricing from '../Pages/Host/HostVanPricing'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
