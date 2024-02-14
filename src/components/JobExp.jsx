/*A section to add practical experience (company name, position title, main
responsibilities of your jobs, date from and until when you worked for that company)*/
export default function JobExp({
    company,
    position,
    responsibilities,
    startJob,
    endJob,
    onChange,
}) {
    return (
        <fieldset>
            <legend>Work Experience</legend>
            <label htmlFor="company">Company Name </label>
            <input
                id="company"
                name="company"
                type="text"
                value={company}
                onChange={onChange}
            />

            <label htmlFor="position">Position </label>
            <input
                id="position"
                name="position"
                type="text"
                value={position}
                onChange={onChange}
            />

            <label htmlFor="responsibilities">Responsabilities </label>
            <textarea
                id="responsibilities"
                rows="3"
                cols="15"
                value={responsibilities}
                onChange={onChange}
            />

            <label htmlFor="startJob">Start Date </label>
            <input
                id="startJob"
                name="startJob"
                type="month"
                value={startJob}
                onChange={onChange}
            />

            <label htmlFor="endJob">End Date </label>
            <input
                id="endJob"
                name="endJob"
                type="month"
                value={endJob}
                onChange={onChange}
            />
        </fieldset>
    );
}
