import FieldWrapper from "./FieldWrapper";

function AboutMe({ generalInfo, handleChange}) {
    return (
        <FieldWrapper title={'About Me'}>
            <textarea 
                placeholder="Tell us about yourself..." 
                name='about-me'
                value={generalInfo.aboutMe}
                onChange={handleChange}
            />
        </FieldWrapper>
    );
}

export default AboutMe