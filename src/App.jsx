import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <BrowserRouter>
    <div className="sticky top-0 z-20">
          <Navbar/>
    </div>
    <div className="navbar-bg"></div>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
    <div className=" pt-24 lg:pt-52  bg-[#F4FAFF]">
    <Footer/>
    </div>
   
  </BrowserRouter>
  )
}

export default App
