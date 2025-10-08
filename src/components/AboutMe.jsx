import FieldWrapper from "./FieldWrapper";

function AboutMe({ generalInfo, handleChange}) {
    return (
        <FieldWrapper title={'About Me'}>
            <textarea 
                placeholder="Tell us about yourself..." 
                name='aboutMe' 
                value={generalInfo.aboutMe}
                onChange={handleChange}
                required
            />
        </FieldWrapper>
    );
}

export default AboutMe