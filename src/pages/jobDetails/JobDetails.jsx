// using context
import { useAppContext } from "../../context/appContext";

// scss
import "./JobDetails.scss";

export default function JobDetails() {
  const { singleJob } = useAppContext();
  return (
    <section>
      {singleJob.map((job) => {
        return (
          <div key={job.id}>
            <div className="container2">
              <div className="company">
                <figure style={{ background: job.logoBackground }}>
                  <img src={job.logo} alt={job.company} />
                </figure>

                <div>
                  <h3>{job.company}</h3>
                  <p>{job.website}</p>
                </div>
                <a href={job.website}>Company Site</a>
              </div>

              <div className="job-details">
                <div className="details">
                  <div>
                    <div>
                      <p>{job.postedAt}</p>
                      <span></span>
                      <p>{job.contract}</p>
                    </div>
                    <h2>{job.position}</h2>
                    <h4>{job.location}</h4>
                  </div>
                  <a href={job.apply} className="primary-btn">
                    Apply Now
                  </a>
                </div>
                <p>{job.description}</p>
                <div>
                  <h3>Requirements</h3>
                  <p>{job.requirements.content}</p>
                  {job.requirements.items.map((item, i) => {
                    return (
                      <p className="req" key={i}>
                        <span></span>
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div>
                  <h3>What You Will Do</h3>
                  <p>{job.role.content}</p>
                  {job.role.items.map((item, i) => {
                    return (
                      <p className="role" key={i}>
                        <span>{i + 1}</span>
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="bottom-details">
              <div className="container2">
                <div>
                  <h3>{job.position}</h3>
                  <p>{job.company}</p>
                </div>
                <button className="primary-btn">Apply Now</button>
              </div>
            </div> */}
          </div>
        );
      })}
    </section>
  );
}
