import React from "react";

const ViewSecretForm = ({
  secretHash,
  handleHashChange,
  handlePasteClick,
  fetchError,
  handleViewSecret,
  isLoading,
}) => {
  return (
    <form>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Secret redeem code...'
          value={secretHash}
          onChange={handleHashChange}
          onClick={handlePasteClick}
          className={fetchError ? "error" : ""}
        />
        <p className='error-msg'>{fetchError ? "Secret not found." : ""}</p>
      </div>
      <button onClick={handleViewSecret} disabled={isLoading}>
        View Secret
      </button>
    </form>
  );
};

export default ViewSecretForm;
