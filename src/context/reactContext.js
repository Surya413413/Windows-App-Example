import React from 'react'

const reactContext = React.createContext({
  activeLanguage: 'HI',
  changeLanguage: () => {},
})

export default reactContext
