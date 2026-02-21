import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";

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

  // const [experience, setExperience] = useState([
  //   {
  //     id: Date.now(),
  //     companyName: "",
  //     position: "",
  //     startDate: null,
  //     endDate: null,
  //   },
  // ]);

  return (
    <div className="container">
      <div className="left">
        <GeneralInfo data={info} setData={setInfo} />
        <Education data={education} setData={setEducation} />
      </div>

      <div className="right">
        <CVPreview info={info} />
      </div>
    </div>
  );
}

export default App;
