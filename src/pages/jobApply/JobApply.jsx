import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin,github,resume);
  }

  return (
    <div>
      <h3 className="text-3xl">Apply Job This Job: <Link to={`/jobs/${jobId}`}> Details</Link></h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn URL</label>
          <input type="url" className="input" name="linkedin" placeholder="LinkedIn Profile Link" />

          <label className="label">Github URL</label>
          <input type="url" className="input" name="github" placeholder="Github Profile Link" />

          <label className="label">Resume URL</label>
          <input type="url" className="input" name="resume" placeholder="Resume Link" />

          <input type="submit" value="Apply Now" className="btn btn-primary mt-4" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
