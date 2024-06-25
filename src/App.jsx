import React, { useContext } from 'react'
import './App.css'

import { ThemeContext } from './context/ThemeContext'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  const { theme } = useContext(ThemeContext)
  const bodyElement = document.getElementById('body');

  if (theme === 'Light') {
    bodyElement.classList.add('app-light-theme');
    bodyElement.classList.remove('app-dark-theme');
  } else {
    bodyElement.classList.add('app-dark-theme');
    bodyElement.classList.remove('app-light-theme');
  }

  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
