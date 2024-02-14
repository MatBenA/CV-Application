export default function GeneralInfo({ name, email, phone, onChange }) {
    return (
        <fieldset>
            <legend>General Information</legend>
            <label htmlFor="name">Name </label>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={onChange}
            />

            <label htmlFor="email">Email </label>
            <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={onChange}
            />

            <label htmlFor="phone">Phone </label>
            <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={onChange}
            />
        </fieldset>
    );
}
