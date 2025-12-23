import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import  useAuth  from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";


// const myApplicationsPromise = email =>{
//   return fetch(`http://localhost:3000/applications?email=${email}`).then(res => res.json())
// } 

const MyApplications = () => {

  const {user} = useAuth()

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        My Applications 
      </h2>
      {/* <ApplicationStats></ApplicationStats> */}
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <ApplicationList
        myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
