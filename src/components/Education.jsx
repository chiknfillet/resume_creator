import FieldWrapper from "./FieldWrapper";

function AboutMe() {
    return (
        <FieldWrapper title={'Education'}>
            <input 
                type="text" 
                placeholder="School Name"
                required
            />
            <input 
                type="text" 
                placeholder="Degree / Field of Study"
                required
            />
            <input 
                type="text" 
                placeholder="Location"
                required
            />
            <input 
                type="text" 
                placeholder="Start Date (e.g., 01/01/2001)"
                required
            />
            <input 
                type="text" 
                placeholder="End Date (e.g., 01/01/2001)"
                required
            />
            <input 
                type="text" 
                placeholder="Description / Achievements"
                required
            />
        </FieldWrapper>
    );
}

export default AboutMe