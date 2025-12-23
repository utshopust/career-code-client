// import React from "react";

// const JobApplicationRow = ({application,index}) => {
//   const {} = application;
//   return (
//     <tr>
//       <th>
//         <label>
//           {index + 1}
//         </label>
//       </th>
//       <td>
//         <div className="flex items-center gap-3">
//           <div className="avatar">
//             <div className="mask mask-squircle h-12 w-12">
//               <img
//                 src="https://img.daisyui.com/images/profile/demo/2@94.webp"
//                 alt="Avatar Tailwind CSS Component"
//               />
//             </div>
//           </div>
//           <div>
//             <div className="font-bold">{company}</div>
//             <div className="text-sm opacity-50">United States</div>
//           </div>
//         </div>
//       </td>
//       <td>
//         Zemlak, Daniel and Leannon
//         <br />
//         <span className="badge badge-ghost badge-sm">
//           Desktop Support Technician
//         </span>
//       </td>
//       <td>Purple</td>
//       <th>
//         <button className="btn btn-ghost btn-xs">details</button>
//       </th>
//     </tr>
//   );
// };

// export default JobApplicationRow;


import React from "react";

const JobApplicationRow = ({ application, index }) => {
  const {
    applicant,
    linkedin,
    github,
    resume,
    jobDetails: {
      title,
      company,
      location,
      jobType,
      description,
      company_logo,
    },
  } = application;

  const modalId = `details_modal_${index}`;

  return (
    <>
      {/* Desktop Row */}
      <tr className="hover hidden md:table-row">
        <th>{index + 1}</th>

        {/* Company */}
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={company_logo} alt={company} />
              </div>
            </div>
            <div>
              <div className="font-semibold">{company}</div>
              <div className="text-sm text-gray-500">{location}</div>
            </div>
          </div>
        </td>

        {/* Job */}
        <td>
          <div className="font-medium">{title}</div>
          <span className="badge badge-ghost badge-sm mt-1">
            {jobType}
          </span>
        </td>

        {/* Applicant */}
        <td className="text-sm break-all">{applicant}</td>

        {/* Action */}
        <th className="text-right">
          <button
            className="btn btn-outline btn-xs"
            onClick={() => document.getElementById(modalId).showModal()}
          >
            View Details
          </button>
        </th>
      </tr>

      {/* Mobile Card */}
      <tr className="md:hidden">
        <td colSpan="5">
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={company_logo}
                alt={company}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <p className="font-semibold">{company}</p>
                <p className="text-sm text-gray-500">{location}</p>
              </div>
            </div>

            <div>
              <p className="font-medium">{title}</p>
              <span className="badge badge-ghost badge-sm">{jobType}</span>
            </div>

            <p className="text-sm break-all">{applicant}</p>

            <button
              className="btn btn-outline btn-sm w-full"
              onClick={() => document.getElementById(modalId).showModal()}
            >
              View Details
            </button>
          </div>
        </td>
      </tr>

      {/* Modal */}
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-3">
            {company} · {location} · {jobType}
          </p>

          <p className="text-sm mb-4">{description}</p>

          <div className="divider">Applicant</div>

          <p className="text-sm mb-3 break-all">
            <strong>Email:</strong> {applicant}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={resume}
              target="_blank"
              className="btn btn-primary btn-sm w-full sm:w-auto"
            >
              Resume
            </a>
            <a
              href={github}
              target="_blank"
              className="btn btn-sm w-full sm:w-auto"
            >
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              className="btn btn-sm w-full sm:w-auto"
            >
              LinkedIn
            </a>
          </div>

          <div className="modal-action">
            <form method="dialog" className="w-full sm:w-auto">
              <button className="btn btn-sm w-full sm:w-auto">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default JobApplicationRow;
