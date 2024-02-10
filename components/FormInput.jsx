import GenerallInformation from "./InputSections/GeneralInformation";
import EducationalInformation from "./InputSections/EducationalInformation";
import JobExperiencie from "./InputSections/JobExperiencie";


export default function FormInput() {
    return (
        <form action="">
            <GenerallInformation />
            <EducationalInformation />
            <JobExperiencie />
        </form>
    );
}
