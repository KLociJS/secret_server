import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const DisplaySecret = ({ secret, resetForm }) => {
  return (
    <div className='flex-column-group-elements'>
      <div className='icon-align'>
        <IoMdCheckmarkCircleOutline className='checkmark-icon' />
        <h1>Secret Successfully Retrieved!</h1>
      </div>
      <div>
        <h2 className='secret-message-title'>Secret message:</h2>
        <p>{secret}</p>
      </div>
      <button onClick={resetForm}>View New Secret</button>
    </div>
  );
};

export default DisplaySecret;
