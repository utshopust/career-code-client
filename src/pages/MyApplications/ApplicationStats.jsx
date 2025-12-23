// import React from "react";

// const ApplicationStats = () => {
//   return (
//     <div className="stats shadow">
//       <div className="stat">
//         <div className="stat-figure text-primary">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="inline-block h-8 w-8 stroke-current"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//             ></path>
//           </svg>
//         </div>
//         <div className="stat-title">Total Likes</div>
//         <div className="stat-value text-primary">25.6K</div>
//         <div className="stat-desc">21% more than last month</div>
//       </div>

//       <div className="stat">
//         <div className="stat-figure text-secondary">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="inline-block h-8 w-8 stroke-current"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M13 10V3L4 14h7v7l9-11h-7z"
//             ></path>
//           </svg>
//         </div>
//         <div className="stat-title">Page Views</div>
//         <div className="stat-value text-secondary">2.6M</div>
//         <div className="stat-desc">21% more than last month</div>
//       </div>

//       <div className="stat">
//         <div className="stat-figure text-secondary">
//           <div className="avatar avatar-online">
//             <div className="w-16 rounded-full">
//               <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
//             </div>
//           </div>
//         </div>
//         <div className="stat-value">86%</div>
//         <div className="stat-title">Tasks done</div>
//         <div className="stat-desc text-secondary">31 tasks remaining</div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationStats;


// src/pages/MyApplications/ApplicationStats.jsx
import React from "react";

const ApplicationStats = ({ applications = [] }) => {
  // Total applications
  const totalApplications = applications.length;

  // Active jobs
  const activeJobs = applications.filter(
    (app) => app.jobDetails?.status === "active"
  );

  // Progress percentage
  const tasksDonePercent =
    totalApplications > 0
      ? Math.round((activeJobs.length / totalApplications) * 100)
      : 0;

  // First 3 company logos for display
  const companyLogos = activeJobs
    .slice(0, 3)
    .map((app) => app.jobDetails?.company_logo)
    .filter(Boolean); // remove undefined

  return (
    <div className="stats shadow mb-6">
      {/* Total Applications */}
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="stat-title">Total Applications</div>
        <div className="stat-value text-primary">{totalApplications}</div>
        <div className="stat-desc">All submitted applications so far</div>
      </div>

      {/* Active Jobs */}
      <div className="stat">
        <div className="stat-figure flex gap-1">
          {companyLogos.map((logo, idx) => (
            <div key={idx} className="avatar">
              <div className="w-8 rounded-full">
                <img src={logo} alt={`Company Logo ${idx + 1}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="stat-title">Active Jobs</div>
        <div className="stat-value text-secondary">{activeJobs.length}</div>
        <div className="stat-desc">{totalApplications - activeJobs.length} jobs inactive</div>
      </div>

      {/* Jobs Progress */}
      <div className="stat">
        <div className="stat-figure flex -space-x-3">
          {applications.slice(0, 3).map((app, idx) => (
            <div key={idx} className="avatar avatar-online">
              <div className="w-12 rounded-full">
                <img
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  alt={app.applicant || "Applicant"}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="stat-value">{tasksDonePercent}%</div>
        <div className="stat-title">Jobs Progress</div>
        <div className="stat-desc text-accent">{totalApplications - activeJobs.length} jobs pending</div>
      </div>
    </div>
  );
};

export default ApplicationStats;
