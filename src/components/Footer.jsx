import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

export const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return(
    <p className="read-the-docs">
      Your Theme is <b>{theme}</b>
    </p>
  )
}
