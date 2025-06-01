import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  //   console.log(jobId, user);

  const handleApplyForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdein = form.linkdein.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkdein,
      github,
      resume,
    };
    // console.log(application)
    axios
      .post("https://carrer-code-server.vercel.app/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={handleApplyForm}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
      <legend className="fieldset-legend">
        Apply for This Job :<Link to={`/jobs/${jobId}`}>Details</Link>
      </legend>

      <label className="label">Linkdein Link</label>
      <input
        type="url"
        name="linkdein"
        className="input"
        placeholder="Linkdein"
      />

      <label className="label">Github Link</label>
      <input
        type="url"
        name="github"
        className="input"
        placeholder="github link"
      />

      <label className="label">Resume Link</label>
      <input
        type="url"
        name="resume"
        className="input"
        placeholder="resume link"
      />
      <input className="btn btn-primary" type="submit" value="Apply" />
    </form>
  );
};

export default JobApply;
