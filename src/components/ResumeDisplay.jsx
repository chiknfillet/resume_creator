import '../styles/resume-display.css'

function ResumeDisplay({
    generalInfo, 
    educations,
    experiences
}) {
    return (
        <section>
            <h1 className={generalInfo.name === '' ? 'placeholder center' : 'center'}>
                {generalInfo.name === '' ? 'Your Name' : generalInfo.name}
            </h1>
            <p className='center'>
                <span className={generalInfo.email === '' ? 'placeholder' : ''}>
                    {generalInfo.email === '' ? 'example@example.com' : generalInfo.email}
                </span>
                {' - '}
                <span className={generalInfo.phone === '' ? 'placeholder' : ''}>
                    {generalInfo.phone === '' ? '(123) 456-789' : generalInfo.phone}
                </span>
            </p>
            <hr />

            <h2>About Me</h2>
            <hr />
            <p className={generalInfo.aboutMe === '' ? 'placeholder' : ''}>
                {generalInfo.aboutMe === '' ? 'Tell us about yourself' : generalInfo.aboutMe}
            </p>


            <h2>Education</h2>
            <hr />
            {educations.length === 0 ? (
                <p className="placeholder">No Education added yet</p>
            ) : (
                educations.map(education => (
                    <div key={education.id}>
                    <h4>{education.schoolName}</h4>
                    <span>
                        {education.startDate} - {education.endDate}
                    </span>
                    <p>{education.degree}</p>
                    <p>{education.location}</p>
                    <p>{education.description}</p>
                    </div>
                ))
            )}
            
            <h2>Experiences</h2>
            <hr />
            {experiences.length === 0 ? (
                <p className="placeholder">No Experience added yet</p>
            ) : (
                experiences.map(experience => (
                    <div key={experience.id}>
                    <h4>{experience.companyName}</h4>
                    <span>
                        {experience.startDate} - {experience.endDate}
                    </span>
                    <p>{experience.position}</p>
                    <p>{experience.responsibilities}</p>
                    </div>
                ))
            )}
        </section>
    )
}

export default ResumeDisplay