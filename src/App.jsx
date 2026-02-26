import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/layout.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";

function App() {
  const [info, setInfo] = useState({
    name: "John Smith",
    email: "contact@topcv.me",
    phoneNumber: "(660) 612 2918",
    address: "Sample Address, NY, US",
    objective:
      "To apply media production and creative arts background and the skills gained as a student leader and a political campaign organizzer to an internship opportunity at CNN.",
  });

  const [education, setEducation] = useState({
    schoolName: "Georgia State University",
    city: "Atlanta",
    country: "US",
    major: "Comp Sci",
    degree: "Bachelor",
    startDate: null,
    endDate: null,
  });

  const [experience, setExperience] = useState({
    companyName: "Obama for America, St. Louis, MO",
    position: "Youth Vote Deputy Field Organizer",
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
