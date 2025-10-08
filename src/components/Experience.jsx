import FieldWrapper from "./FieldWrapper"
import '../styles/experience.css'

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
            <button  className="add-btn" onClick={addExperience}>Add</button>
            <ul className="experience-list">
                {experiences.map((experience) => (
                    <li key={experience.id} className="experience-item">
                    <div className="experience-header">
                        <h4 className="company-name">{experience.companyName}</h4>
                        <span className="date-range">
                        {experience.startDate} - {experience.endDate}
                        </span>
                    </div>

                    <p className="position">{experience.position}</p>
                    <p className="responsibilities">{experience.responsibilities}</p>

                    <div className="experience-actions">
                        <button className="edit-btn" onClick={() => editExperience(experience.id)}>
                        Edit
                        </button>
                        <button className="delete-btn" onClick={() => deleteExperience(experience.id)}>
                        Delete
                        </button>
                    </div>
                    </li>
                ))}
            </ul>
        </FieldWrapper>
    )
}

export default Experience