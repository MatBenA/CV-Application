export default function InfoGeneral(){
    
    //name, email, phone
    return(
        <section> 

            <label htmlFor="firstname">First Name </label>
            <input type="text" name="firstname" />
            
            <label htmlFor="lastname">Last Name </label>
            <input type="text" name="lastname" />

            <label htmlFor="email">Email </label>
            <input type="email" name="email" />

            <label htmlFor="phone">Phone Number </label>
            <input type="tel" name="phone" />
            
        </section>
    )
}