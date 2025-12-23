// import React from 'react';

// const AddJob = () => {
//     return (
//         <div>
//             <h2>Please Add A Job</h2>
//         </div>
//     );
// };

// export default AddJob;

import React from "react";

const AddJob = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Add New Job</h2>

      <form className="space-y-6">
        {/* Job Basic Info */}
        <fieldset className="border rounded-lg p-5">
          <legend className="px-2 font-medium">Job Information</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Job Title" className="input" />
            <input type="text" placeholder="Company Name" className="input" />
            <input type="text" placeholder="Location" className="input" />
            <input type="text" placeholder="Job Type (Full-Time / Part-Time)" className="input" />
            <input type="text" placeholder="Category" className="input" />
            <input type="date" className="input" />
          </div>
        </fieldset>

        {/* Salary */}
        <fieldset className="border rounded-lg p-5">
          <legend className="px-2 font-medium">Salary Range</legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" placeholder="Minimum Salary" className="input" />
            <input type="number" placeholder="Maximum Salary" className="input" />
            <input type="text" placeholder="Currency (bdt)" className="input" />
          </div>
        </fieldset>

        {/* Description */}
        <fieldset className="border rounded-lg p-5">
          <legend className="px-2 font-medium">Job Description</legend>

          <textarea
            rows="4"
            placeholder="Job Description"
            className="input w-full"
          />
        </fieldset>

        {/* Requirements */}
        <fieldset className="border rounded-lg p-5">
          <legend className="px-2 font-medium">Requirements</legend>

          <textarea
            rows="3"
            placeholder="Requirements (comma separated)"
            className="input w-full"
          />
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="border rounded-lg p-5">
          <legend className="px-2 font-medium">Responsibilities</legend>

          <textarea
            rows="3"
            placeholder="Responsibilities (comma separated)"
            className="input w-full"
          />
        </fieldset>

        {/* HR Info */}
        <fieldset className="border rounded-lg p-5">
          <legend className="px-2 font-medium">HR Information</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="HR Name" className="input" />
            <input type="email" placeholder="HR Email" className="input" />
          </div>
        </fieldset>

        {/* Company Logo */}
        <fieldset className="border rounded-lg p-5">
          <legend className="px-2 font-medium">Company Logo</legend>

          <input type="text" placeholder="Company Logo URL" className="input w-full" />
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
