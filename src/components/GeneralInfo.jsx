import FieldWrapper from "./FieldWrapper";
import '../styles/general-info.css'

function GeneralInfo({ generalInfo, handleChange }) {
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
                name="name"
                placeholder="Full Name (e.g., John Doe)"
                value={generalInfo.name}
                onChange={handleChange}
                required
            />
            <input 
                type="email" 
                name="email"
                placeholder="Email (e.g., johndoe@example.com)"
                value={generalInfo.email}
                onChange={handleChange}
                required
            />
            <input
                type="text" 
                name="phone"
                placeholder="Phone Number (e.g., (123) 456-7890)"
                value={generalInfo.phone}
                onChange={handleChange}
                required
            />
        </FieldWrapper>
    );
}

export default GeneralInfo