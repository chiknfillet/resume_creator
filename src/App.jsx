import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import AboutMe from './components/AboutMe.jsx'
import Education from './components/Education.jsx'
import ResumeDisplay from './components/ResumeDisplay.jsx'  
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main>
      <div>
        <GeneralInfo 
          generalInfo={generalInfo}
          handleChange={handleGeneralInfoChange}
        />
        <AboutMe />
        <Education />
      </div>
      <div>
        <ResumeDisplay name={generalInfo.name}/>
      </div>
    </main>
  )
}

export default App
