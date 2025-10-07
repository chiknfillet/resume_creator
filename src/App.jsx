import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import AboutMe from './components/AboutMe.jsx'
import Education from './components/Education.jsx'
import './App.css'

function App() {
  return (
    <>
      <GeneralInfo />
      <AboutMe />
      <Education />
    </>
  )
}

export default App
