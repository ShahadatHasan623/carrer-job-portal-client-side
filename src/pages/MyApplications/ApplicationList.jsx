import React, { use } from "react";
import ApplicationTable from "./ApplicationTable";

const ApplicationList = ({ MyApplication }) => {
  const application = use(MyApplication);
  console.log(application)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {application.map((applications,index )=><ApplicationTable applications={applications} index={index}></ApplicationTable>)}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
