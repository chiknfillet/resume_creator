import FieldWrapper from "./FieldWrapper";
import '../styles/education.css'

function Education({
    currentEducation, 
    educations, 
    handleChange,
    deleteEducation,
    editEducation,
    addEducation
}) {
    return (
        <FieldWrapper title={'Education'}>
            <input 
                type="text" 
                placeholder="School Name"
                name="schoolName"
                value={currentEducation.schoolName}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="Degree / Field of Study"s
                name="degree"
                value={currentEducation.degree}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="Location"
                name="location"
                value={currentEducation.location}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="Start Date (e.g., 01/01/2001)"
                name="startDate"
                value={currentEducation.startDate}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="End Date (e.g., 01/01/2001)"
                name="endDate"
                value={currentEducation.endDate}
                onChange={handleChange}
                required
            />
            <input 
                type="text" 
                placeholder="Description / Achievements"
                name="description"
                value={currentEducation.description}
                onChange={handleChange}
                required
            />
            <button className="add-btn" type="submit" onClick={addEducation}>Add</button>
            <ul className="education-list">
                {educations.map((education) => (
                    <li key={education.id} className="education-item">
                    <div className="education-header">
                        <h4 className="school-name">{education.schoolName}</h4>
                        <span className="date-range">
                            {education.startDate} - {education.endDate}
                        </span>
                    </div>

                    <p className="degree">{education.degree}</p>
                    <p className="location">{education.location}</p>
                    <p className="description">{education.description}</p>

                    <div className="education-actions">
                        <button
                            className="edit-btn"
                            onClick={() => editEducation(education.id)}
                        >
                        Edit
                        </button>
                        <button
                            className="delete-btn"
                            onClick={() => deleteEducation(education.id)}
                        >
                        Delete
                        </button>
                    </div>
                    </li>
                ))}
            </ul>
        </FieldWrapper>
    );
}

export default Education