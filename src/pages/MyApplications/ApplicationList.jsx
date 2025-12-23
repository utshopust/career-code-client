// import React, { use } from "react";
// import JobApplicationRow from "./JobApplicationRow";

// const ApplicationList = ({ myApplicationsPromise }) => {
//   const applications = use(myApplicationsPromise);
//   return (
//     <div>
//       <h3 className="text-3xl">Applications So Far: {applications.length}</h3>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>
//                 #
//               </th>
//               <th>Name</th>
//               <th>Job</th>
//               <th>Email</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((application, index) => (
//               <JobApplicationRow
//                 key={application._id}
//                 index={index}
//                 application={application}
//               ></JobApplicationRow>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ApplicationList;


import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4">
        Total Applied ({applications.length})
      </h3>

      {applications.length === 0 ? (
        <p className="text-gray-500">No applications found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <table className="table table-zebra">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Job</th>
                <th>Applicant Email</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application, index) => (
                <JobApplicationRow
                  key={application._id}
                  index={index}
                  application={application}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationList;
