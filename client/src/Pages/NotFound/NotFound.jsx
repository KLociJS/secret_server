import React from "react";
import { GrDocumentMissing } from "react-icons/gr";

import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className='container-column'>
      <GrDocumentMissing className='missing-icon' />
      <h1>404 Page not found</h1>
      <Link to='/' className='not-found-link'>
        Go back to home page
      </Link>
    </div>
  );
}

export default NotFound;
