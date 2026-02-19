// import DatePicker from "react-datepicker";

// export default function Experience({ draft, setDraft, submit }) {

//   function handleChange(e, index) {
//     const { name, value } = e.target;

//     setExperience((prev) => {
//       const updated = [...prev];
//       updated[index] = {
//         ...updated[index],
//         [name]: value,
//       };
//       return updated;
//     });
//   }
//   function handleSubmit() {
//     submit();

//   }

//   function handleDateChange(date, index, field) {
//     setExperience((prev) => {
//       const updated = [...prev];
//       updated[index] = {
//         ...updated[index],
//         [field]: date,
//       };
//       return updated;
//     });
//   }

//   function handleAddExperience() {
//     setExperience((prev) => {
//       return [
//         ...prev,
//         {
//           id: Date.now(),
//           companyName: "",
//           position: "",
//           startDate: null,
//           endDate: null,
//         },
//       ];
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       {experience.map((job, index) => {
//         return (
//           <section key={job.id}>
//             <div>
//               <label>Company Name:</label>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={job.companyName}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>
//             <div>
//               <label>Position:</label>
//               <input
//                 type="text"
//                 name="position"
//                 value={job.position}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>
//             <div>
//               <label>Start Date:</label>
//               <DatePicker
//                 closeOnScroll
//                 dateFormat="MM/yyyy"
//                 showMonthYearPicker
//                 selected={job.startDate}
//                 onChange={(date) => handleDateChange(date, index, "startDate")}
//               />
//             </div>
//             <div>
//               <label>End Date:</label>
//               <DatePicker
//                 closeOnScroll
//                 dateFormat="MM/yyyy"
//                 showMonthYearPicker
//                 selected={job.endDate}
//                 onChange={(date) => handleDateChange(date, index, "endDate")}
//               />
//             </div>
//           </section>
//         );
//       })}
//       <button type="button" onClick={handleAddExperience}>
//         Add Experience
//       </button>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
