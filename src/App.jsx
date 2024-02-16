import "./styles/App.css";
import "./styles/visualizer.css";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import JobExp from "./components/JobExp";

// this component should split the screen in two parts, left for the form and right for the CV
function App() {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setGeneralInfo((prev) => ({ ...prev, [name]: value }));
    };

    const [educationInfo, setEducationInfo] = useState({
        school: "",
        title: "",
        startStudy: "",
        endStudy: "",
    });

    const handleEducationChange = ({ target }) => {
        const { name, value } = target;
        setEducationInfo((prev) => ({ ...prev, [name]: value }));
    };

    const [jobExperience, setJobExperience] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startJob: "",
        endJob: "",
    });

    const handleJobExp = ({ target }) => {
        const { name, value } = target;
        setJobExperience((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="main">
            <form className="left">
                <GeneralInfo {...generalInfo} onChange={handleChange} />

                <EducationInfo
                    {...educationInfo}
                    onChange={handleEducationChange}
                />

                <JobExp {...jobExperience} onChange={handleJobExp} />
            </form>
            <section className="right">
                <div className="general">
                    <h1>{generalInfo.name}</h1>
                    <ul>
                        <li>
                            <h4>{generalInfo.email}</h4>
                        </li>
                        <li>
                            <h4>{generalInfo.phone}</h4>
                        </li>
                        <li>
                            <h4>Misiones, Argentina</h4>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <h4>{educationInfo.school}</h4>
                        </li>
                        <li>
                            <h4>{educationInfo.title}</h4>
                        </li>
                        <li>
                            <h4>
                                {educationInfo.startStudy} -{" "}
                                {educationInfo.endStudy}
                            </h4>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Work Experience</h3>
                    <ul>
                        <li>
                            <h4>{jobExperience.company}</h4>
                        </li>
                        <li>
                            <h4>{jobExperience.position}</h4>
                        </li>
                        <li>
                            <h4>{jobExperience.responsibilities}</h4>
                        </li>
                        <li>
                            <h4>
                                {jobExperience.startJob} -{" "}
                                {jobExperience.endJob}
                            </h4>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default App;
