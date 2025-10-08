import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import AboutMe from './components/AboutMe.jsx'
import Education from './components/Education.jsx'
import ResumeDisplay from './components/ResumeDisplay.jsx'  
import Experience from './components/Experience.jsx'
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    aboutMe: ''
  });
  const [educations, setEducations] = useState([])
  const [currentEducation, setCurrentEducation] = useState({
    schoolName: '',
    degree: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  })
  const [experiences, setExperiences] = useState([])
  const [currentExperience, setCurrentExperience] = useState({
    companyName: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  })

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function addEducation() {
    setEducations(prev => [...prev, {
      ...currentEducation,
      id: crypto.randomUUID()
    }]);
    setCurrentEducation({
      schoolName: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  }

  function deleteEducation(id) {
    setEducations(prev => prev.filter(education => education.id !== id));
  }

  function editEducation(id) {
    deleteEducation(id)
    setCurrentEducation(educations.find(education => education.id === id))
  }
  
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function addExperience() {
    setExperiences(prev => [...prev, {
      ...currentExperience,
      id: crypto.randomUUID()
    }]);
    setCurrentExperience({
      companyName: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    });
  }

  function deleteExperience(id) {
    setExperiences(prev => prev.filter(experience => experience.id !== id));
  }

  function editExperience(id) {
    deleteExperience(id)
    setCurrentExperience(experiences.find(experience => experience.id === id))
  }

  return (
    <main>
      <div className='form'>
        <GeneralInfo 
          generalInfo={generalInfo}
          handleChange={handleGeneralInfoChange}
        />
        <AboutMe 
          generalInfo={generalInfo}
          handleChange={handleGeneralInfoChange}
        />
        <Education 
          currentEducation={currentEducation}
          educations={educations}
          handleChange={handleEducationChange}
          deleteEducation={deleteEducation}
          editEducation={editEducation}
          addEducation={addEducation}
        />
        <Experience
          currentExperience={currentExperience}
          experiences={experiences}
          handleChange={handleExperienceChange}
          deleteExperience={deleteExperience}
          editExperience={editExperience}
          addExperience={addExperience}
        />
      </div>
      <div className='resume'>
        <ResumeDisplay 
          generalInfo={generalInfo}
          educations={educations}
          experiences={experiences}
        />
      </div>
    </main>
  )
}

export default App
