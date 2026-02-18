import DatePicker from "react-datepicker";

export default function Experience({ experience, setExperience }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setExperience((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      {experience.map((job) => {
        return (
          <section key={job.id}>
            <div>
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={job.companyName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Position:</label>
              <input
                type="text"
                name="position"
                value={job.position}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Start Date:</label>
              <DatePicker
                closeOnScroll
                dateFormat="MM/YYYY"
                showMonthYearPicker
                selected={experience.startDate}
                onChange={(date) =>
                  setExperience((prev) => {
                    return { ...prev, startDate: date };
                  })
                }
              />
            </div>
            <div>
              <label>End Date:</label>
              <DatePicker
                closeOnScroll
                dateFormat="MM/YYYY"
                showMonthYearPicker
                selected={experience.endDate}
                onChange={(date) =>
                  setExperience((prev) => {
                    return { ...prev, endDate: date };
                  })
                }
              />
            </div>
          </section>
        );
      })}
    </form>
  );
}
