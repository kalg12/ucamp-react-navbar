import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BootcampsPage from '../pages/BootcampsPage'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
    
    <Router>
    <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bootcamps" element={<BootcampsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter