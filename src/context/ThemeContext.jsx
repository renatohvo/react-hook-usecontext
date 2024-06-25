import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Dark')

  const toggleTheme = () => {
    setTheme(theme === 'Dark' ? 'Light' : 'Dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}