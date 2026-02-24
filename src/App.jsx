import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/layout.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    objective: "",
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
  });

  return (
    <>
      <div className="left">
        <GeneralInfo data={info} setData={setInfo} />
        <Education data={education} setData={setEducation} />
        <Experience data={experience} setData={setExperience} />
      </div>

      <div className="right">
        <CvPreview info={info} education={education} experience={experience} />
      </div>
    </>
  );
}

export default App;
