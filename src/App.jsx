import FormInput from "../components/FormInput";
import CVVisualizer from "../components/CVVisualizer";

// this component should split the screen in two parts, left for the form and right for the CV
function App() {
    return (
        <div>
            <FormInput />
            <CVVisualizer />
        </div>
    );
}

export default App;
