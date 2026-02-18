import DatePicker from "react-datepicker";

export default function Experience({ experience, setExperience }) {
  function handleChange(e, index) {
    const { name, value } = e.target;

    setExperience((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [name]: value,
      };
      return updated;
    });
  }
  function handleSubmit() {}

  function handleDateChange(date, index, field) {
    setExperience((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: date,
      };
      return updated;
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {experience.map((job, index) => {
        return (
          <section key={job.id}>
            <div>
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={job.companyName}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div>
              <label>Position:</label>
              <input
                type="text"
                name="position"
                value={job.position}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div>
              <label>Start Date:</label>
              <DatePicker
                closeOnScroll
                dateFormat="MM/YYYY"
                showMonthYearPicker
                selected={job.startDate}
                onChange={(date) => handleDateChange(date, index, "startDate")}
              />
            </div>
            <div>
              <label>End Date:</label>
              <DatePicker
                closeOnScroll
                dateFormat="MM/YYYY"
                showMonthYearPicker
                selected={job.endDate}
                onChange={(date) => handleDateChange(date, index, "endDate")}
              />
            </div>
          </section>
        );
      })}
    </form>
  );
}
