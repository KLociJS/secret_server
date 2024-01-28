import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

import "./SecretSaveSuccess.css";

function SecretSaveSuccess({ postSuccessData, resetCreateSecret }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(postSuccessData.hash);
  };

  return (
    <div className='successful-secret-post'>
      <div>
        <div className='icon-align'>
          <IoMdCheckmarkCircleOutline className='checkmark-icon' />
          <h1>Secret saved!</h1>
        </div>
        <p>You can view the secret with the provided code.</p>
      </div>
      <div className='hash-copy-container'>
        <p className='hash-code'>{postSuccessData.hash}</p>
        <MdContentCopy onClick={handleCopy} className='copy-icon' />
      </div>
      <button onClick={resetCreateSecret}>New Secret</button>
    </div>
  );
}

export default SecretSaveSuccess;
