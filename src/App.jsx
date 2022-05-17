import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { About } from './views/About'
import { Contact } from './views/Contact'
import { Home } from './views/Home'

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {/* END OF HEADER */}
      {/* BEGIN MAIN */}
      <main>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/about' element={ <About /> } />
          <Route exact path='/contact' element={ <Contact /> } />
        </Routes>
      </main>

      <footer>

      </footer>

    </>
  )
}

// why doesn't routes get recognized ?