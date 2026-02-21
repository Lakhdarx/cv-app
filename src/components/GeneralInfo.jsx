import { useState } from "react";

export default function GeneralInfo({ data, setData }) {
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
      <h3>General Information</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={draft.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={draft.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={draft.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={draft.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Objective:</label>
            <textarea
              name="objective"
              value={draft.objective}
              onChange={handleChange}
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
