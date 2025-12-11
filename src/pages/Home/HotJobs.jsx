import React, { use } from "react";
import JobCard from "../Shared/jobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div>
        <h2 className="text-5xl text-center  my-4">Hot Jobs Of The Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
