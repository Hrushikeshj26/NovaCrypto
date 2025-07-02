
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Coin from './pages/Coin'
import Footer from './components/Footer'
import AuthPage from './pages/AuthPage'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {

  return (
    <div className='app overflow-hidden'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:coinId' element={<Coin/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <Footer/>
    </div>

  )
}

export default App
