import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [education, setEducation] = useState({
    name: "",
    city: "",
    country: "",
    major: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const [experience, setExperience] = useState([
    {
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
    },
  ]);
}

export default App;
