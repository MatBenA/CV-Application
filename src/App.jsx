import "../styles/App.css";
//import {requiredInputs} from "./Form.js";

const requiredInputs = [
    { name: "firstname", label: "First Name ", type: "text", id: 1 },
    { name: "lastname", label: "Last Name ", type: "text", id: 2 },
    { name: "email", label: "Email ", type: "email", id: 3 },
    { name: "phone", label: "Phone ", type: "tel", id: 4 },
]

function App() {
    return (
        <p>
            {requiredInputs.map((index) => {
                return(<p key={index}>hola</p>)
            })}
        </p>
    );
}

export default App;
