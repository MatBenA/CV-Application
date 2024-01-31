export default function ProfesionalInfo() {
    /*
    company name, position title, main
    responsibilities of your jobs, date from
    and until when you worked for that company
    */
    return(
        <section>
            <label htmlFor="company">Company Name </label>
            <input type="text" name="company"/>

            <label htmlFor="postion">Postion </label>
            <input type="text" name="postion"/>

            <label htmlFor="responsabilities">Responsabilities </label>
            <input type="text" name="responsabilities"/>
            
            <label htmlFor="datejobstart">Starting Date </label>
            <input type="date" name="datejobstart"/>

            <label htmlFor="datejobend">End Date </label>
            <input type="date" name="datejobend"/>
        </section>
    )
}