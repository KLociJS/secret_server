import { Link } from "react-router-dom";

import { ROUTES } from "../../Constants/Constants";
import "./Home.css";

const Home = () => {
  return (
    <div className='container-column'>
      <h1 className='landing-header'>Secret Safe</h1>
      <p className='landing-intro'>
        Safeguard your secrets with SecretSafe. Share securely, read discreetly.
      </p>
      <Link to={ROUTES.CREATE_SECRET} className='landing-cta'>
        Get Started
      </Link>
    </div>
  );
};

export default Home;
