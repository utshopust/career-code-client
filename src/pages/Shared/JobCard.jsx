import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    location,
    jobType,
    description,
    requirements,
    _id,
    salaryRange,
    company_logo,
  } = job;
  return (
//     <div className="card bg-base-100  shadow-sm border-2 border-blue-200">
//       <div className="flex items-center gap-1.5">
//         <figure>
//           <img src={company_logo} className="w-16" alt="C-logo" />
//         </figure>
//         <div>
//           <h3 className="text-4xl">{company}</h3>
//           <p className="flex items-center gap-1">
//             <FaMapMarkerAlt></FaMapMarkerAlt>
//             {location}
//           </p>
//         </div>
//       </div>
//       <div className="card-body">
//         <h2 className="card-title">
//           {title}
//           <div className="badge badge-secondary">{jobType}</div>
//         </h2>
//         <p>
//           Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
//         </p>
//         <p>{description}</p>
//         <div className="card-actions ">
//           {requirements.map((skill, index) => (
//             <div key={index} className="badge badge-outline">
//               {skill}
//             </div>
//           ))}
//         </div>
//         <div className="card-actions justify-end">
//           <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
//         </div>
//       </div>
//     </div>
//   );
// };


<div className="card bg-[#0e0e0e] border border-blue-900 shadow-lg rounded-xl p-4 
            transition-all duration-300 hover:shadow-blue-700/40 hover:shadow-2xl hover:-translate-y-1">
  
  {/* Header */}
  <div className="flex items-center gap-3">
    <figure className="w-16 h-16 rounded-lg overflow-hidden border border-blue-800 bg-black/40 
                      flex items-center justify-center transition-transform duration-300 hover:scale-105">
      <img src={company_logo} className="w-12 h-12 object-contain" alt="C-logo" />
    </figure>

    <div>
      <h3 className="text-xl font-semibold text-blue-200">{company}</h3>
      <p className="flex items-center gap-1 text-sm text-gray-400">
        <FaMapMarkerAlt className="text-blue-500" />
        {location}
      </p>
    </div>
  </div>

  {/* Body */}
  <div className="card-body px-0">
    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
      {title}
      <span className="badge bg-blue-700 text-white text-xs px-2 py-1">{jobType}</span>
    </h2>

    <p className="text-sm text-gray-300">
      <span className="font-semibold text-blue-300">Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
    </p>

    <p className="text-gray-400 leading-relaxed">
      {description.length > 120 ? description.slice(0, 120) + "..." : description}
    </p>

    {/* Skills */}
    <div className="flex flex-wrap gap-2 mt-2">
      {requirements.map((skill, index) => (
        <div
          key={index}
          className="badge border border-blue-600 text-blue-300 px-3 py-2 rounded-md bg-blue-900/20 
                     transition duration-200 hover:bg-blue-900/40"
        >
          {skill}
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="mt-4 flex justify-end">
      <Link to={`/jobs/${_id}`}>
        <button
          className="btn bg-blue-600 hover:bg-blue-500 text-white border-none px-6 rounded-lg 
                     transition-all duration-300 shadow-md hover:shadow-blue-500/40"
        >
          Apply Now
        </button>
      </Link>
    </div>
  </div>
</div>

  );
};
export default JobCard;
