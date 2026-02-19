import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // const [education, setEducation] = useState({
  //   name: "",
  //   city: "",
  //   country: "",
  //   major: "",
  //   degree: "",
  //   startDate: null,
  //   endDate: null,
  // });

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
      </div>

      <div className="right">
        <CVPreview info={info} />
      </div>
    </div>
  );
}

export default App;
