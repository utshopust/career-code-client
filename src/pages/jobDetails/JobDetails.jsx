// import React from 'react';
// import { useLoaderData } from 'react-router';

// const JobDetails = () => {
//     const {title,company} = useLoaderData();
//     // console.log(job);
//     return (
//         <div>
//             <h2 className="text-6xl">{title}</h2>
//             <p>Company: {company}</p>
//         </div>
//     );
// };

// export default JobDetails;

// import React from "react";
// import { useLoaderData } from "react-router";

// const JobDetails = () => {
//   const job = useLoaderData();

//   const {
//     title,
//     company,
//     company_logo,
//     location,
//     jobType,
//     category,
//     applicationDeadline,
//     salaryRange,
//     description,
//     requirements,
//     responsibilities,
//     hr_email,
//     hr_name,
//   } = job;

//   return (
//     <div className="max-w-7xl mx-auto p-6 text-gray-300 grid grid-cols-1 lg:grid-cols-3 gap-10">

//       {/* Left Section */}
//       <div className="lg:col-span-2">

//         {/* Header */}
//         <div className="flex items-center gap-5 mb-8">
//           <img
//             src={company_logo}
//             alt={`${company} Logo`}
//             className="h-16 w-auto object-contain bg-white/10 p-2 rounded-xl shadow-lg"
//           />
//           <div>
//             <h1 className="text-4xl font-bold text-white">{title}</h1>
//             <p className="text-lg text-gray-400">{company}</p>
//             <p className="text-sm text-gray-500">{location}</p>
//           </div>
//         </div>

//         {/* Description */}
//         <section className="mb-10">
//           <h2 className="text-2xl font-semibold text-white mb-3">Job Description</h2>
//           <p className="text-gray-300 leading-relaxed">{description}</p>
//         </section>

//         {/* Requirements */}
//         <section className="mb-10">
//           <h2 className="text-2xl font-semibold text-white mb-3">Requirements</h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-300">
//             {requirements.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </section>

//         {/* Responsibilities */}
//         <section className="mb-10">
//           <h2 className="text-2xl font-semibold text-white mb-3">Responsibilities</h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-300">
//             {responsibilities.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </section>
//       </div>

//       {/* RIGHT SIDEBAR */}
//       <div className="bg-[#0f0f0f] border border-gray-800 p-6 rounded-xl h-fit sticky top-10">

//         {/* Job Summary */}
//         <h3 className="text-xl font-semibold text-white mb-5">Job Summary</h3>

//         <div className="space-y-3 text-gray-300 text-sm">
//           <p><span className="font-semibold text-white">Job Type:</span> {jobType}</p>
//           <p><span className="font-semibold text-white">Category:</span> {category}</p>
//           <p>
//             <span className="font-semibold text-white">Salary:</span> 
//             {" "}
//             {salaryRange.min} – {salaryRange.max} {salaryRange.currency.toUpperCase()}
//           </p>
//           <p><span className="font-semibold text-white">Deadline:</span> {applicationDeadline}</p>
//         </div>

//         {/* HR Info */}
//         <div className="mt-6 border-t border-gray-800 pt-6">
//           <h3 className="text-lg font-semibold text-white mb-2">HR Contact</h3>
//           <p><span className="font-semibold text-white">Name:</span> {hr_name}</p>
//           <p><span className="font-semibold text-white">Email:</span> {hr_email}</p>
//         </div>

//         {/* Apply Button */}
//         <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
//           Apply Now
//         </button>
//       </div>

//     </div>
//   );
// };

// export default JobDetails;


import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  if (!job) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-gray-300">
        <p>Loading job details...</p>
      </div>
    );
  }

  const {
    title,
    _id,
    company,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange = { min: "N/A", max: "N/A", currency: "USD" },
    description,
    requirements = [],
    responsibilities = [],
    hr_email,
    hr_name,
  } = job;

  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-300 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Left Section */}
      <div className="lg:col-span-2">

        {/* Header */}
        <div className="flex items-center gap-5 mb-8">
          <img
            src={company_logo}
            alt={`${company} Logo`}
            className="h-16 w-auto object-contain bg-white/10 p-2 rounded-xl shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="text-lg text-gray-400">{company}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Job Description</h2>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </section>

        {/* Requirements */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Requirements</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            {requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Responsibilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            {responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="bg-[#0f0f0f] border border-gray-800 p-6 rounded-xl h-fit sticky top-10">

        {/* Job Summary */}
        <h3 className="text-xl font-semibold text-white mb-5">Job Summary</h3>

        <div className="space-y-3 text-gray-300 text-sm">
          <p><span className="font-semibold text-white">Job Type:</span> {jobType}</p>
          <p><span className="font-semibold text-white">Category:</span> {category}</p>
          <p>
            <span className="font-semibold text-white">Salary:</span> {salaryRange.min} – {salaryRange.max} {salaryRange.currency.toUpperCase()}
          </p>
          <p><span className="font-semibold text-white">Deadline:</span> {applicationDeadline}</p>
        </div>

        {/* HR Info */}
        <div className="mt-6 border-t border-gray-800 pt-6">
          <h3 className="text-lg font-semibold text-white mb-2">HR Contact</h3>
          <p><span className="font-semibold text-white">Name:</span> {hr_name}</p>
          <p><span className="font-semibold text-white">Email:</span> {hr_email}</p>
        </div>

        {/* Apply Button as Email Link */}
        {/* <a
          href={`mailto:${hr_email}?subject=Application for ${encodeURIComponent(title)}`}
          className="w-full block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-center transition"
        >
          Apply Now
        </a> */}

        <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
      </div>

    </div>
  );
};

export default JobDetails;
