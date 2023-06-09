// scss
import "./jobsListings.scss";

// useContext
import { useAppContext } from "../../context/appContext";

// for navigating other page
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function JobsListings() {
  const { getSingleJobDetails, searchedResult } = useAppContext();
  const [jobShow, setJobShow] = useState(9);
  const navigate = useNavigate();

  const handleJobDetails = (id) => {
    getSingleJobDetails(id);
    navigate(`/${id}`);
  };

  const handleShowAllJobs = () => {
    setJobShow(15);
  };

  return (
    <section className="listings">
      <div>
        {searchedResult.slice(0, jobShow).map((job) => {
          return (
            <div key={job.id} className="jobcard">
              <figure
                style={{ background: job.logoBackground }}
                className="company-logo"
              >
                <img src={job.logo} alt={job.company} />
              </figure>
              <div className="job-details">
                <div>
                  <p>{job.postedAt}</p>
                  <span></span>
                  <p>{job.contract}</p>
                </div>
                <h2 onClick={() => handleJobDetails(job.id)}>{job.position}</h2>
                <p>{job.company}</p>
              </div>
              <h4>{job.location}</h4>
            </div>
          );
        })}
      </div>
      <button
        className={`primary-btn ${jobShow === 15 ? "blocked" : null}`}
        onClick={handleShowAllJobs}
      >
        Load More
      </button>
    </section>
  );
}
