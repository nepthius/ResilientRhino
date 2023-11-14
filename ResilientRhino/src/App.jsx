import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route 
              path="/"
              element={<Home />}
          />
          <Route path="/country/:countryName" element={<CountryDetails />} />

        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
