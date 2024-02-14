export default function EducationInfo({
    school,
    title,
    startStudy,
    endStudy,
    onChange,
}) {
    return (
        <fieldset>
            <legend>Education</legend>
            <label htmlFor="school">School Name </label>
            <input
                id="school"
                name="school"
                type="text"
                value={school}
                onChange={onChange}
            />

            <label htmlFor="title">Title of Study </label>
            <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={onChange}
            />

            <label htmlFor="startStudy">Start of study </label>
            <input
                id="startStudy"
                name="startStudy"
                type="month"
                value={startStudy}
                onChange={onChange}
            />

            <label htmlFor="endStudy">End of study </label>
            <input
                id="endStudy"
                name="endStudy"
                type="month"
                value={endStudy}
                onChange={onChange}
            />
        </fieldset>
    );
}
