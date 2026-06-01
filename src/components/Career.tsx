import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Dotnet Developer</h4>
                <h5>Arham Technosoft</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked on .NET based application development, contributing to
              backend systems and enterprise software solutions in Ahmedabad.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Specialist</h4>
                <h5>Shree Bhavani Hallmarking Centre</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Managed IT infrastructure and operations, ensuring secure systems
              and efficient technology processes for the organization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Specialist & Digital Ops Lead</h4>
                <h5>Inobal & WorthMinds</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading end-to-end digital operations, IT execution, data privacy,
              project handling, team coordination, and AI-driven content strategy
              across both organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
