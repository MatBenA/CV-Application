import { v4 as uuidv4 } from "uuid";

export const requiredInputs = [
    [
        { name: "firstname", label: "First Name ", type: "text", id: uuidv4() },
        { name: "lastname", label: "Last Name ", type: "text", id: uuidv4() },
        { name: "email", label: "Email ", type: "email", id: uuidv4() },
        { name: "phone", label: "Phone ", type: "tel", id: uuidv4() },
    ],
    [
        { name: "school", label: "School Name ", type: "text", id: uuidv4() },
        { name: "title", label: "Title ", type: "text", id: uuidv4() },
        { name: "start-date", label: "Start Date ", type: "date", id: uuidv4() },
        { name: "finish-date", label: "Finish Date ", type: "date", id: uuidv4() },
    ],
    [
        { name: "company-name", label: "Company Name ", type: "text", id: uuidv4() },
        { name: "position", label: "Position ", type: "text", id: uuidv4() },
        { name: "responsabilities", label: "Responsabilities ", type: "text", id: uuidv4() },
        { name: "start-date-job", label: "Start Date ", type: "date", id: uuidv4() },
        { name: "finish-date-job", label: "Finish Date ", type: "date", id: uuidv4() },
    ],
];
