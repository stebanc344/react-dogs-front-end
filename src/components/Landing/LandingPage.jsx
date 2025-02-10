import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Dogs Inc!</h1>
        <p>A catalog of everyone's favorite furry friends.</p>
        <img
          src="https://files.oaiusercontent.com/file-SQMFp6EiLKT3g12vdMN2bh?se=2025-02-08T02%3A03%3A49Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbe32b7ce-094e-48fb-9b57-3e544788732d.webp&sig=esOeIiIOIWWfVDckvrZr3EHLSFkDBhFl9rgbIVvXYHE%3D"
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