import DatePicker from "react-datepicker";
import { useState } from "react";
import "../styles/experience.css";

export default function Experience({ data, setData }) {
  const [draft, setDraft] = useState(data);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setDraft((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData(draft);
    setSubmitted(true);
  }

  return (
    <section className="experience">
      <h3>Work Experience</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={draft.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Position:</label>
            <input
              type="text"
              name="position"
              value={draft.position}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <DatePicker
              closeOnScroll
              dateFormat="MM/yyyy"
              showMonthYearPicker
              selected={draft.startDate}
              onChange={(date) =>
                setDraft((prev) => {
                  return { ...prev, startDate: date };
                })
              }
            />
          </div>
          <div>
            <label>End Date:</label>
            <DatePicker
              closeOnScroll
              dateFormat="MM/yyyy"
              showMonthYearPicker
              selected={draft.endDate}
              onChange={(date) =>
                setDraft((prev) => {
                  return { ...prev, endDate: date };
                })
              }
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setDraft(data);
          }}
        >
          Edit
        </button>
      )}
    </section>
  );
}
