import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header'

import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  )
}

export default App
