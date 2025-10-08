import FieldWrapper from "./FieldWrapper"

function Experience({
    currentExperience,
    experiences,
    handleChange,
    deleteExperience,
    editExperience,
    addExperience
}) {
    return (
        <FieldWrapper title='Experince'>
            <input 
                type="text" 
                placeholder="Company Name"
                name="companyName"
                value={currentExperience.companyName}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="Position"
                name="position"
                value={currentExperience.position}
                onChange={handleChange}
                required
            />
            <input 
                type="textarea" 
                placeholder="Main Resposibilities"
                name="responsibilities"
                value={currentExperience.responsibilities}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="Start Date (e.g., 01/01/2001)"
                name="startDate"
                value={currentExperience.startDate}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="End Date (e.g., 01/01/2001)"
                name="endDate"
                value={currentExperience.endDate}
                onChange={handleChange}
                required
            />
            <button onClick={addExperience}>Add</button>
            <ul className="experince-list">
                {experiences.map((experience) => (
                    <div key={experience.id}>
                        <h4>{experience.companyName}</h4> <span>{experience.startDate} {experience.endDate}</span>
                        <p>{experience.position}</p>
                        <p>{experience.responsibilities}</p>
                        <button
                            onClick={() => editExperience(experience.id)}>
                            Edit
                        </button>
                        <button 
                            onClick={() => deleteExperience(experience.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </ul>
        </FieldWrapper>
    )
}

export default Experience