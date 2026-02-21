import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [education, setEducation] = useState({
    schoolName: "",
    city: "",
    country: "",
    major: "",
    degree: "",
    startDate: null,
    endDate: null,
  });

  const [experience, setExperience] = useState({
    companyName: "",
    position: "",
    startDate: null,
    endDate: null,
    main: "",
  });

  return (
    <div className="container">
      <div className="left">
        <GeneralInfo data={info} setData={setInfo} />
        <Education data={education} setData={setEducation} />
        <Experience data={experience} setData={setExperience} />
      </div>

      <div className="right">
        <CVPreview info={info} />
      </div>
    </div>
  );
}

export default App;
