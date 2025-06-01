import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AddJob = () => {
  const {user}=useAuth()
  const handleAddForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const {min,max,currency,...newJob}=data
    newJob.salaryRange ={
      min,max,currency
    }
    newJob.requirements=newJob.requirements.split(',').map(req=>req.trim());
    newJob.responsibilities=newJob.responsibilities.split(',').map(res=>res.trim())
    newJob.status="active"
    axios.post('https://carrer-code-server.vercel.app/jobs',newJob)
    .then(res=>{
      console.log(res.data)
    })
    .then(error=>{
      console.log(error)
    })
  };
  return (
    <form onSubmit={handleAddForm}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info </legend>

        <label className="label">Title</label>
        <input
          type="text"
          name="title"
          className="input"
          placeholder="Job Title"
        />

        <label className="label">Company</label>
        <input
          type="text"
          name="company"
          className="input"
          placeholder="Company Name"
        />

        <label className="label">Location</label>
        <input
          type="text"
          name="location"
          className="input"
          placeholder="Company Location"
        />
        <label className="label">Company logo</label>
        <input
          type="text"
          name="company_logo"
          className="input"
          placeholder="Company Logo Url"
        />
      </fieldset>

      {/* job type */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Type </legend>
        <div className="filter">
          <input
            className="btn filter-reset"
            type="radio"
            name="jobType"
            value="Part-Time"
            aria-label="Part-Time"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            value="Remote"
            aria-label="Remote"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            value="Contractual"
            aria-label="Contractual"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            value="Full-Time"
            aria-label="Full-Time"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            value="Intern"
            aria-label="Intern"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            value="Hybrid"
            aria-label="Hybrid"
          />
        </div>
      </fieldset>

      {/* job category */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Category </legend>
        <select defaultValue="Job Category" name="category" className="select">
          <option disabled={true}>Job Category</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Teaching</option>
        </select>
      </fieldset>

      {/* applicationDeadline */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">applicationDeadline </legend>
        <input name="applicationDeadline" type="date" className="input" />
      </fieldset>

      {/* salaryRange */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">salary Range</legend>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div>
            <label className="label">Minimum Salary</label>
            <input
              type="text"
              name="min"
              className="input"
              placeholder="Minimum salary"
            />
          </div>
          <div>
            <label className="label">Maximum Salary</label>
            <input
              type="text"
              name="max"
              className="input"
              placeholder="Maximum salary"
            />
          </div>
          <div>
            <label className="label">Currency</label>
            <select defaultValue="Currency" name="currency" className="select">
              <option disabled={true}>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
          </div>
        </div>
      </fieldset>
      {/* description */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job description </legend>
        <textarea
          className="textarea"
          name="description"
          placeholder=" job description "
        ></textarea>
      </fieldset>
      {/* requirements */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">requirements</legend>
        <textarea
          className="textarea"
          name="requirements"
          placeholder=" job requirements"
        ></textarea>
      </fieldset>
      {/* responsibilities */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">responsibilities</legend>
        <textarea
          className="textarea"
          name="responsibilities"
          placeholder=" job responsibilities"
        ></textarea>
      </fieldset>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Hr Related Info </legend>

        <label className="label">hr email</label>
        <input
          type="text"
          name="hr_email"
          className="input"
          defaultValue={user.email}
          placeholder="hr_email"
        />

        <label className="label">hr name</label>
        <input
          type="text"
          name="hr_name"
          className="input"
          placeholder="hr_name"
        />
      </fieldset>
      <input className="btn" type="submit" value="Add Job" />
    </form>
  );
};

export default AddJob;
