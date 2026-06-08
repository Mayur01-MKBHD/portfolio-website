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
                <h4>.NET Developer</h4>
                <h5>Arham Technosoft</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed enterprise-grade web applications using .NET, C#,
              ASP.NET MVC, and SQL Server within Agile sprint cycles.
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
              Administered IT systems and hardware infrastructure, achieving
              near-zero unplanned downtime. Resolved 15+ support tickets per
              month with high first-contact resolution rates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Technology Specialist</h4>
                <h5>Inobal</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Deployed full-stack website (PHP, Laravel, cPanel); led SEO/GEO
              strategy achieving 4x improvement in search impressions within
              18 days with 5.3% CTR. Managed IT infrastructure, data privacy,
              and information security governance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology & Digital Operations Lead</h4>
                <h5>WorthMinds</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting end-to-end digital operations — project management,
              brand communications, and social media strategy using
              LLM-augmented workflows and AI tools (ChatGPT, Claude, Gemini,
              Cursor, n8n).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
