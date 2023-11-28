import { useState, useEffect   } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CountryDetails from './components/CountryDetails'

function App() {
  const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
          document.body.classList.add('body-loading');
      } else {
          document.body.classList.remove('body-loading');
      }
  }, [isLoading]);

  if (isLoading) {
      return (
          <div style={{ textAlign: 'center' }}>
              <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" style={{ height: '40px', marginBottom: '20px' }} />
              <p style={{ color: '#757575', fontSize: '20px' }}>Loading...</p>
          </div>
      );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home isLoading={isLoading} setLoading={setLoading} />}
            />
            <Route 
              path="/country/:countryName" 
              element={<CountryDetails isLoading={isLoading} setLoading={setLoading} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
