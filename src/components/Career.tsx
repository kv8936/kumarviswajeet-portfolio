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
                <h4>AI Engineer</h4>
                <h5>SOLIT GmbH · Germany</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Since Aug 2025, building AI-driven solutions and intelligent
              workflows for business automation and decision support.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Data Analyst</h4>
                <h5>BYJU'S · Jaipur</h5>
              </div>
              <h3>Jun 2021–Sep 2021</h3>
            </div>
            <p>
              Built Python/SQL data pipelines and CRM analysis workflows,
              improved data extraction speed by 40%, increased conversion by
              30%, and reduced operational costs by 25% through data-led
              recommendations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Data Analyst</h4>
                <h5>RMC Switchgear Limited · Jaipur</h5>
              </div>
              <h3>Oct 2020–Apr 2021</h3>
            </div>
            <p>
              Created SQL/SAP customer data systems and pricing/tender analytics,
              improved acquisition by 15%, increased average deal size by 10%,
              and helped secure ₹500,000 in strategic contract revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
