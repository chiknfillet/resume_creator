import FieldWrapper from "./FieldWrapper";

function AboutMe() {
    return (
        <FieldWrapper title={'About Me'}>
            <textarea placeholder="Tell us about yourself..." />
        </FieldWrapper>
    );
}

export default AboutMe