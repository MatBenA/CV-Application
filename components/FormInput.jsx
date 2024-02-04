export default function FormInput({name, label, type}){
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} />
        </>
    )
}