import React from "react";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    company_logo,
    company,
    description,
    salaryRange,
    requirements,
    _id
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-3">
        <div>
          <figure>
            <img src={company_logo} alt="" />
          </figure>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{company}</h1>
          <p className="flex items-center">
            <MdLocationPin size={20} /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <p className="font-semibold">
          JobType : {jobType}
          <br />
          Salary : {salaryRange.min}-{salaryRange.max}
        </p>
        <div className="card-actions">
          {requirements.map((req) => (
            <div className="badge badge-outline">{req}</div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
