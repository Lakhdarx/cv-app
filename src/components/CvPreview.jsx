import profilePic from "../assets/x.png";
import { format } from "date-fns";

export default function CvPreview({ info, education, experience }) {
  return (
    <main>
      <div className="info">
        <div className="left">
          <img src={profilePic} alt="Profile Picture sample" />
        </div>
        <div className="right">
          <h1>{info.name}</h1>
          <div className="more-info">
            <label>Phone:</label>
            <p>{info.phoneNumber}</p>
            <label>Email:</label>
            <p>{info.email}</p>
            <label>Address:</label>
            <p>{info.address}</p>
          </div>
        </div>
      </div>

      <div className="objective">
        <h3>OBJECTIVE</h3>
        <hr />
        <p>{info.objective}</p>
      </div>
      <div className="education">
        <h3>EDUCATION</h3>
        <hr />
        <div className="more-info">
          <p>
            {format(education.startDate, "MMM yyyy")} -{" "}
            {format(education.endDate, "MMM yyyy")}
          </p>
          <div>
            <p>
              {education.schoolName}, {education.city}, {education.country}
            </p>
            <p>
              {education.degree} in {education.major}
            </p>
          </div>
        </div>
      </div>
      <div className="experience">
        <h3>WORK EXPERIENCE</h3>
        <hr />
        <div className="more-info">
          <p>
            {format(experience.startDate, "MMM yyyy")} -{" "}
            {format(experience.endDate, "MMM yyyy")}
          </p>
          <div>
            <p>{experience.companyName}</p>
            <p>{experience.position}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
