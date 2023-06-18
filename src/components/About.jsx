import Group from "../assets/img/group-img.jpg";
import TeamWork from "../assets/img/team-work.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDownRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <div className="About-section-main">
        <h3 className="about-us">About us</h3>
        <div className="About-section">
          <div className="our-group">
            <div className="circle">
              <img src={Group} />
            </div>
          </div>
          <div className="group-story">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="our-group-2">
          <div className="team-state">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <a href="#" className="see-btn">
              see more <FontAwesomeIcon icon="fa-solid fa-arrow-down-right" className="icon" />
            </a>
          </div>
          <div className="team-work">
            <img src={TeamWork} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
