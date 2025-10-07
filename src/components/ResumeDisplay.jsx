function ResumeDisplay({generalInfo}) {
    return (
        <section>
            <h1>{generalInfo.name}</h1>
            <p>{generalInfo.email} - {generalInfo.phone}</p>
            <hr />
            <h2>About Me</h2>
            <hr />
            <p>{generalInfo.aboutMe}</p>
        </section>
    )
}

export default ResumeDisplay