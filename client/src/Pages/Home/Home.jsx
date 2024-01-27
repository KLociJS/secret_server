import { Link } from "react-router-dom";

import { NAV_LINKS } from "../../Constants/Constants";
import "./Home.css";

const Home = () => {
  return (
    <div className='landing-container'>
      <h1 className='landing-header'>Secret Safe</h1>
      <p className='landing-intro'>
        Safeguard your secrets with SecretSafe. Share securely, read discreetly.
      </p>
      <Link to={NAV_LINKS.CREATE_SECRET} className='landing-cta'>
        Get Started
      </Link>
    </div>
  );
};

export default Home;
