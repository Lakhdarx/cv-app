// import DatePicker from "react-datepicker";

// export default function Educational({ education, setEducation }) {
//   function handleChange(e) {
//     const { name, value } = e.target;

//     setEducation((prev) => {
//       return { ...prev, [name]: value };
//     });
//   }

//   function onSubmit() {}

//   return (
//     <form onSubmit={onSubmit}>
//       <h2>Educational Experience</h2>
//       <div>
//         <label>School Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={education.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>City:</label>
//         <input
//           type="text"
//           name="city"
//           value={education.city}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Country:</label>
//         <input
//           type="text"
//           name="country"
//           value={education.country}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Major:</label>
//         <input
//           type="text"
//           name="major"
//           value={education.major}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Degree:</label>
//         <select name="degree" onChange={handleChange} value={education.degree}>
//           <option value="associate">Associate</option>
//           <option value="bachelor">Bachelor</option>
//           <option value="master">Master</option>
//           <option value="doctoral">Doctoral</option>
//         </select>
//       </div>

//       <div>
//         <label>Start Date:</label>
//         <DatePicker
//           closeOnScroll
//           dateFormat="MM/yyyy"
//           showMonthYearPicker
//           selected={education.startDate}
//           onChange={(date) =>
//             setEducation((prev) => {
//               return { ...prev, startDate: date };
//             })
//           }
//         />
//       </div>

//       <div>
//         <label>End Date:</label>
//         <DatePicker
//           closeOnScroll
//           dateFormat="MM/yyyy"
//           showMonthYearPicker
//           selected={education.endDate}
//           onChange={(date) =>
//             setEducation((prev) => {
//               return { ...prev, endDate: date };
//             })
//           }
//         />
//       </div>
//     </form>
//   );
// }
