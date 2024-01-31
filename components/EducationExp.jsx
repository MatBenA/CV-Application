export default function EducationInfo(){
    //school name, title of study and date of study
    return(
        <section>

            <label htmlFor="school">School Name </label>
            <input type="text" name="school" />

            <label htmlFor="title">Title </label>
            <input type="text" name="title" />

            <label htmlFor="studystart">Start of study </label>
            <input type="date" name="studystart" />

            <label htmlFor="studyend">End of study </label>
            <input type="date" name="studyend" />
            
        </section>
    )
}