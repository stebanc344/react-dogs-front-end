import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Dogs Inc!</h1>
        <p>A catalog of everyone's favorite furry friends.</p>
        <img
          src="https://www.shutterstock.com/image-photo/set-pet-watching-260nw-278746295.jpg"
          alt="Happy dog"
          className="landing-image"
        />
        <Link to="/dogs">
          <button className="cta-button">View Dogs</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;