function FieldWrapper({children, title}) {
    return (
        <section className="form-field">
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default FieldWrapper