export default function FormInput({name, label, type}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} />
        </div>
    )
}