import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
          <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
