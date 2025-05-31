import React, { use } from "react";
import { Link } from "react-router";

const JobLists = ({ jobAddByPromise }) => {
  const jobs = use(jobAddByPromise);
  console.log(jobs);
  return (
    <div>
      <h1 className="text-3xl">job add buy list :{jobs.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>Deadline</th>
              <th>Count</th>
              <th>view Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.application_count}</td>
                <td><Link to={`/applications/${job._id}`}>Veiw Applications</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;
