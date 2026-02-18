export default function GeneralInfo({ info, setInfo }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit() {} // finish submit function

  return (
    <section>
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={info.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}
