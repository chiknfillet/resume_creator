import FieldWrapper from "./FieldWrapper";
import '../styles/general-info.css'

function GeneralInfo() {
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidName(name) {
        return name.trim().split(" ").length >= 2;
    }

    function isValidPhone(phone) {
        return /^\(\d{3}\) \d{3}-\d{4}$/.test(phone);
    }

    return (
        <FieldWrapper title={'General Info'}>
            <input 
                type="text" 
                placeholder="Full Name (e.g., John Doe)"
                required
            />
            <input 
                type="email" 
                placeholder="Email (e.g., johndoe@example.com)"
                required
            />
            <input 
                type="number" 
                placeholder="Phone Number (e.g., (123) 456-789)"
                required
            />
        </FieldWrapper>
    );
}

export default GeneralInfo