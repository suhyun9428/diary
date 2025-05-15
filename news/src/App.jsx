import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <header>
        <div>weather</div>
        <title>SUN NEWS</title>
        <button>search</button>
      </header>
      <main className='box__container'>
        <Home/>
      </main>
      <footer>
        <button type='button'>seacrh</button>
        <button type='button'>home</button>
        <button type='button'>filter</button>
        <button type='button'>location</button>
      </footer>
    </>
  )
}

export default App
