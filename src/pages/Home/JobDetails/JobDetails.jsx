import React from "react";
import { BsWatch } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { LuClipboardType } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  console.log(jobDetails);
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    jobType,
    location,
    salaryRange,
    title,
    _id
  } = jobDetails;
  return (
    <div className="border-2 border-gray-200 p-10 rounded-2xl space-y-4">
      <div className="text-3xl mb-8 border-b-2 border-gray-200 py-4">
        <h1>Empolyment Info</h1>
      </div>
      <div className="flex items-center gap-5">
        <figure>
          <img src={company_logo} alt="" />
        </figure>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="flex">
            <MdLocationPin size={20} /> {location}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex itms-center gap-12">
          <div className="flex items-center gap-1">
            <FaIndustry size={20} className="text-slate-500" />
            <span>Industry</span>
          </div>
          <h2 className="text-xl font-semibold flex-1">{company}</h2>
        </div>
        <div className="flex itms-center gap-12">
          <div className="flex items-center gap-1">
            <LuClipboardType size={20} className="text-slate-500 " />
            <span>Job Type</span>
          </div>
          <h2 className="text-xl font-semibold flex-1">{jobType}</h2>
        </div>
        <div className="flex itms-center gap-12">
          <div className="flex items-center gap-1">
            <BsWatch size={20} className="text-slate-500" />
            <span>Deadline</span>
          </div>
          <h2 className="text-xl font-semibold flex-1">
            {applicationDeadline}
          </h2>
        </div>
        <div className="flex itms-center gap-12">
          <div className="flex items-center gap-1">
            <HiOutlineCurrencyDollar size={20} className="text-slate-500" />
            <span>Salary</span>
          </div>
          <h2 className="text-xl font-semibold flex-1">
            {salaryRange.min}-{salaryRange.max}
          </h2>
        </div>
        <div className="flex itms-center gap-12">
          <div className="flex items-center gap-1">
            <TbCategoryPlus size={20} className="text-slate-500" />
            <span>category</span>
          </div>
          <h2 className="text-xl font-semibold flex-1">{category}</h2>
        </div>
      </div>
      <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
    </div>
  );
};

export default JobDetails;
