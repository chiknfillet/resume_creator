function ResumeDisplay({
    generalInfo, 
    educations,
    experiences
}) {
    return (
        <section>
            <h1>{generalInfo.name}</h1>
            <p>{generalInfo.email} - {generalInfo.phone}</p>
            <hr />
            <h2>About Me</h2>
            <hr />
            <p>{generalInfo.aboutMe}</p>
            <h2>Education</h2>
            <hr />
            {educations.map(education => (
                <div key={education.id}>
                    <h4>{education.schoolName}</h4> <span>{education.startDate} {education.endDate}</span>
                    <p>{education.degree}</p>
                    <p>{education.location}</p>
                    <p>{education.description}</p>
                </div>
            ))}
            <h2>Experiences</h2>
            <hr />
            {experiences.map(experience => (
                <div key={experience.id}>
                    <h4>{experience.companyName}</h4> <span>{experience.startDate} {experience.endDate}</span>
                    <p>{experience.position}</p>
                    <p>{experience.responsibilities}</p>
                </div>
            ))}
        </section>
    )
}

export default ResumeDisplay