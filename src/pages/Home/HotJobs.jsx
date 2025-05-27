import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {
            jobs.map(job=><JobsCard key={job._id} job={job}></JobsCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;
