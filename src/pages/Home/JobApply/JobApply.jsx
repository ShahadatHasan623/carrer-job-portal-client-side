import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyForm =e=>{
    e.preventDefault()
    const form =e.target;
    // const linkdein =form.linkdein.value;
    // const github =form.github.value;
    // const resume =form.resume.value;
    const formData =new FormData(form)
    const formUser =Object.fromEntries(formData.entries())
    console.log(formUser)

  }
  return (
        <form onSubmit={handleApplyForm}  className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Apply for This Job :<Link to={`/jobs/${jobId}`}>Details</Link></legend>

          <label className="label">Linkdein Link</label>
          <input type="url" name="linkdein" className="input" placeholder="Linkdein" />
         
          <label className="label">Github Link</label>
          <input type="url" name="github" className="input" placeholder="github link" />

          <label className="label">Resume Link</label>
          <input type="url" name="resume" className="input" placeholder="resume link" />
          <input className="btn btn-primary" type="submit" value="Apply" />
        </form>
  );
};

export default JobApply;
