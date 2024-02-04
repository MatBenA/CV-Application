import { requiredInputs } from "./Data.js";
import FormInput from "../components/FormInput.jsx";

function App() {
    return (
        <>
            <form>
                {requiredInputs.map((section, index) => {
                    return (
                        <section key={index}>
                            {section.map((input) => {
                                return (
                                    <div key={input.id}>
                                        <FormInput
                                            name={input.name}
                                            label={input.label}
                                            type={input.type}
                                        />
                                    </div>
                                );
                            })}
                        </section>
                    );
                })}
                <button type="submit">Submit!</button>
            </form>
        </>
    );
}

export default App;
