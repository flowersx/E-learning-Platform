import { Route, Routes } from 'react-router'

import Navbar from './components/Navbar'
import Home from './pages/HomePage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App