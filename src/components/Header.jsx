import React, { useContext } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import { ThemeContext } from '../context/ThemeContext'

export const Header = () => {
  const { theme } = useContext(ThemeContext)

  return(
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Theme is <b>{theme}</b></h1>
    </>
  )
}