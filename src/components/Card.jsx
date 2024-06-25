import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

export const Card = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return(
    <div className="card">
      <button onClick={toggleTheme}>
        Change Theme
      </button>
      <p>
        <h2>React Hook - useContext - {theme}</h2>
      </p>
    </div>
  )
}