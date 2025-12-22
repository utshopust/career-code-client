import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";

const MyApplications = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        My Applications Page
      </h2>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <ApplicationList></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
