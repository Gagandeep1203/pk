import React from 'react';
import './Career.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const jobs = [
  { title: 'Frontend Developer', description: 'React, JavaScript, CSS.' },
  { title: 'Backend Developer', description: 'Node.js, Express, MongoDB.' },
];

function Career() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const [subtitleRef, subtitleVisible] = useRevealOnScroll();
  const jobRefs = jobs.map(() => useRevealOnScroll());
  const [formRef, formVisible] = useRevealOnScroll();
  return (
    <div id="career" className="career-container">
      <h2
        className={`career-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Career
      </h2>
      <h3
        className={`career-subtitle reveal-on-scroll${subtitleVisible ? ' visible' : ''}`}
        ref={subtitleRef}
      >
        Open Positions
      </h3>
      <div className="career-jobs">
        {jobs.map((job, idx) => {
          const [jobRef, jobVisible] = jobRefs[idx];
          return (
            <div
              className={`career-job reveal-on-scroll${jobVisible ? ' visible' : ''}`}
              ref={jobRef}
              key={idx}
            >
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button className="career-apply-btn">Apply</button>
            </div>
          );
        })}
      </div>
      <form
        className={`career-form reveal-on-scroll${formVisible ? ' visible' : ''}`}
        ref={formRef}
      >
        <h3 className="career-form-title">Application Form</h3>
        <input className="career-input" type="text" placeholder="Name" required />
        <input className="career-input" type="email" placeholder="Email" required />
        <input className="career-input" type="text" placeholder="Position" required />
        <textarea className="career-input" placeholder="Message" rows={4}></textarea>
        <button className="career-submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Career;