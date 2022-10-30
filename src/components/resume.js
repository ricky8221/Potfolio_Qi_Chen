import React from "react";

function Resume() {
  return (
    <div className="resumecontainer">
      <div className="box red">
        <h1 className="content">Resume</h1>
      </div>
      <div className="resumebody">
        <img className="resumePic" src={process.env.PUBLIC_URL + '/img/Qi-Chen-Resume.jpg'} alt="Ricky Chen" />
      </div>
      <div className="download">
        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Qi-Chen-resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span>Download My Resume</span>
        </a>
      </div>

    </div>
  );
}

export default Resume;
