import React from "react";

import "./CreateSecret.css";

const CreateSecret = () => {
  return (
    <div className='container-column'>
      <h1>Create secret</h1>
      <p>
        Provide details for your secret. View limit has to be positive number.
        Expiration in minutes, 0 means no expiration.{" "}
      </p>
      <form className='secret-form'>
        <div className='input-container'>
          <input type='text' placeholder='Set view limit...' />
          <p className='error-msg'> </p>
        </div>
        <div className='input-container'>
          <input type='text' placeholder='Set expiration time in minutes...' />
          <p className='error-msg'> </p>
        </div>
        <div className='input-container'>
          <textarea
            id='secret'
            rows='4'
            cols='50'
            placeholder='Type your secret message here...'
          />
          <p className='error-msg'></p>
        </div>
        <button>Save Secret</button>
      </form>
    </div>
  );
};

export default CreateSecret;
