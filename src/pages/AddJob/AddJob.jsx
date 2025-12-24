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
import {
  Briefcase,
  MapPin,
  Layers,
  DollarSign,
  FileText,
  CheckSquare,
  User,
  Image as ImageIcon,
} from "lucide-react";

const AddJob = () => {
  return (
    <div className="max-w-5xl mx-auto p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg mb-5">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
        Add New Job
      </h2>

      <form className="space-y-10">
        {/* Job Basic Info */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition hover:shadow-sm">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <Briefcase size={16} /> Job Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <input
              className="input input-bordered w-full"
              name="title"
              placeholder="Job Title"
            />
            <input
              className="input input-bordered w-full"
              name="company"
              placeholder="Company Name"
            />
            <input
              className="input input-bordered w-full"
              name="location"
              placeholder="Location"
            />
            <input
              className="input input-bordered w-full"
              type="date"
              name="deadline"
            />
          </div>
        </fieldset>

        {/* Job Type */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <MapPin size={16} /> Job Type
          </legend>

          <div className="flex flex-wrap gap-4 mt-6">
            <input
              className="btn btn-outline btn-sm transition-all"
              type="radio"
              name="jobType"
              aria-label="On-Site"
            />
            <input
              className="btn btn-outline btn-sm transition-all"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn btn-outline btn-sm transition-all"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Category */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <Layers size={16} /> Job Category
          </legend>

          <select className="select select-bordered w-full mt-6">
            <option disabled selected>
              Select Category
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
            <option>Others</option>
          </select>
        </fieldset>

        {/* Salary */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <DollarSign size={16} /> Salary Range
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <input
              className="input input-bordered w-full"
              name="min_salary"
              placeholder="Min Salary"
            />
            <input
              className="input input-bordered w-full"
              name="max_salary"
              placeholder="Max Salary"
            />
            <input
              className="input input-bordered w-full"
              name="currency"
              placeholder="Currency"
            />
          </div>
        </fieldset>

        {/* Description */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <FileText size={16} /> Job Description
          </legend>

          <textarea
            className="textarea textarea-bordered w-full mt-6"
            rows="4"
            placeholder="Describe the role clearly"
          />
        </fieldset>

        {/* Requirements */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <CheckSquare size={16} /> Requirements
          </legend>

          <textarea
            className="textarea textarea-bordered w-full mt-6"
            rows="3"
            placeholder="Comma separated requirements"
          />
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <CheckSquare size={16} /> Responsibilities
          </legend>

          <textarea
            className="textarea textarea-bordered w-full mt-6"
            rows="3"
            placeholder="Comma separated responsibilities"
          />
        </fieldset>

        {/* HR */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <User size={16} /> HR Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <input
              className="input input-bordered w-full"
              placeholder="HR Name"
            />
            <input
              className="input input-bordered w-full"
              placeholder="HR Email"
            />
          </div>
        </fieldset>

        {/* Logo */}
        <fieldset className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <legend className="px-3 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <ImageIcon size={16} /> Company Logo
          </legend>

          <input
            className="input input-bordered w-full mt-6"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Submit */}
        <button
          type="submit"
          className="w-full btn btn-primary btn-lg rounded-xl transition-transform hover:scale-[1.01]"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
