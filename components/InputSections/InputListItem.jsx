export default function InputListItem({ name, label, type = "text" }) {
    return (
        <li>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} />
        </li>
    );
}
