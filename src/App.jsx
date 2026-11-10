
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Discover from './pages/Discover'
import Watchlist from './pages/Watchlist'
import FilmDetail from './pages/FilmDetail'



function App() {

 


  return (
    <>
      
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path="/film/:id" element={<FilmDetail />} />
        </Routes>
        <Footer/>
     
    </>
  )
}

export default App
