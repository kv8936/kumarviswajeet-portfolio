import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/kumar-viswajeet/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — kumar-viswajeet
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.Sc. in Artificial Intelligence, Berlin School of Business and
              Innovation — 2025–2026
            </p>
            <p>
              Master&apos;s in Data Analyst, Berlin School of Business and
              Innovation — 2022–2023 (GPA: 1.7)
            </p>
            <p>
              B.Tech Arya Institute of Engineering
              and Technology, Jaipur — 2020–2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/kv8936"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-viswajeet/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kumar Viswajeet</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
