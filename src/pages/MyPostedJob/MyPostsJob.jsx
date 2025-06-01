import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import useJob from "../../api/useJob";
import JobLists from "./JobLists";
import MyApplicationjob from "../../api/MyApplicationjob";

const MyPostsJob = () => {
  const { user } = useAuth();
  const{jobAddByPromise}=useJob()

  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <JobLists
          jobAddByPromise={jobAddByPromise(user.email, user.accessToken)}
        ></JobLists>
      </Suspense>
    </div>
  );
};

export default MyPostsJob;
