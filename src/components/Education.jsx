import DatePicker from "react-datepicker";
import { useState } from "react";

export default function Education({ data, setData }) {
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
    <section>
      <h3>Educational Experience</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>School Name:</label>
            <input
              type="text"
              name="schoolName"
              value={draft.schoolName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={draft.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={draft.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Major:</label>
            <input
              type="text"
              name="major"
              value={draft.major}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Degree:</label>
            <select name="degree" onChange={handleChange} value={draft.degree}>
              <option value="associate">Associate</option>
              <option value="bachelor">Bachelor</option>
              <option value="master">Master</option>
              <option value="doctoral">Doctoral</option>
            </select>
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
