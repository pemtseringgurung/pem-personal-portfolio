import React from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
