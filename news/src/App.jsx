import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Filter from './pages/Filter'
import Location from './pages/Location'
import Search from './pages/Search'
import Footer from './components/Footer'
// import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
        <main className='box__container'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/filter" element={<Filter />} />
              <Route path="/location" element={<Location />} />
              <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
