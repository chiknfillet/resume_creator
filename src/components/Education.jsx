import FieldWrapper from "./FieldWrapper";

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
            <button type="submit" onClick={addEducation}>Add</button>
            <ul className="education-list">
                {educations.map((education) => (
                    <div key={education.id}>
                        <h4>{education.schoolName}</h4> <span>{education.startDate} {education.endDate}</span>
                        <p>{education.degree}</p>
                        <p>{education.location}</p>
                        <p>{education.description}</p>
                        <button
                            onClick={() => editEducation(education.id)}>
                            Edit
                        </button>
                        <button 
                            onClick={() => deleteEducation(education.id)}>
                            Delete
                        </button>
                        
                    </div>
                ))}
            </ul>
        </FieldWrapper>
    );
}

export default Education