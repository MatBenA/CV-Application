import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";

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

    return (
        <div style={{ display: "flex" }}>
            <form>
                {/*A section to add general information like name, email and phone number.*/}
                <GeneralInfo
                    name={generalInfo.name}
                    email={generalInfo.email}
                    phone={generalInfo.phone}
                    onChange={handleChange}
                />

                {/*A section to add your educational experience (school name, title of 
                study and date of study)*/}
                {/* <fieldset>
                    <legend>Education</legend>
                    <label htmlFor="school">School Name </label>
                    <input id="school" name="school" type="text" />

                    <label htmlFor="title">Title of Study </label>
                    <input id="title" name="title" type="text" />

                    <label htmlFor="startStudy">Start of study </label>
                    <input id="startStudy" name="startStudy" type="month" />

                    <label htmlFor="endStudy">End of study </label>
                    <input id="endStudy" name="endStudy" type="month" />
                </fieldset> */}
                <EducationInfo
                    {...educationInfo}
                    onChange={handleEducationChange}
                />

                {/*A section to add practical experience (company name, position title, main
                 responsibilities of your jobs, date from and until when you worked for that company)*/}
                <fieldset>
                    <legend>Work Experience</legend>
                    <label htmlFor="company">Company Name </label>
                    <input id="company" name="company" type="text" />

                    <label htmlFor="position">Position </label>
                    <input id="position" name="position" type="text" />

                    <label htmlFor="responsability">Responsabilities </label>
                    <textarea id="responsability" rows="3" cols="15" />

                    <label htmlFor="startJob">Start Date </label>
                    <input id="startJob" name="startJob" type="month" />

                    <label htmlFor="endJob">End Date </label>
                    <input id="endJob" name="endJob" type="month" />
                </fieldset>
            </form>
            <section>
                <div>
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
                                {educationInfo.startStudy} - {educationInfo.endStudy}
                            </h4>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Work Experience</h3>
                    <ul>
                        <li>
                            <h4>Mercado Libre</h4>
                        </li>
                        <li>
                            <h4>Backend Developer</h4>
                        </li>
                        <li>
                            <h4>
                                Maintain, update, and add new features to server
                                and database
                            </h4>
                        </li>
                        <li>
                            <h4>2024 - 2027</h4>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default App;

// info no modificable
// name, label, type

// info state
// value
