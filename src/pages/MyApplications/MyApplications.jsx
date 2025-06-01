import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import MyApplicationjob from "../../api/MyApplicationjob";



const MyApplications = () => {
  const { user } = useAuth();
  const {MyApplication}=MyApplicationjob()
  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense>
        <ApplicationList
          key={MyApplication._id} MyApplication={MyApplication(user.email, user.accessToken)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
