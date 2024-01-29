import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "./SecretSaveSuccess.css";

function SecretSaveSuccess({ postSuccessData, resetCreateSecret }) {
  // On successful secret save, display the secret hash and a message

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
      </div>

      <button onClick={resetCreateSecret}>New Secret</button>
    </div>
  );
}

export default SecretSaveSuccess;

// TODO: Copy to clipboard functionality after SSL

// const handleCopy = async () => {
//   await navigator.clipboard.writeText(postSuccessData.hash);
// };

//<MdContentCopy onClick={handleCopy} className='copy-icon' />
