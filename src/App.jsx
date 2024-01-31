import InfoGeneral from "../components/InfoGeneral.jsx";
import EducationInfo from "../components/EducationExp.jsx";
import ProfesionalInfo from "../components/ProfesionalInfo.jsx";
import FormInput from "../components/FormInput.jsx";

function App() {
    return (
        <>
            <InfoGeneral />
            <EducationInfo />
            <ProfesionalInfo />
            <FormInput name="Domicilio" label="Domicilio:" type="color" />
        </>
    );
}

export default App;
