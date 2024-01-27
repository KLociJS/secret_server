import React from "react";

function SecretForm({
  secret,
  secretError,
  viewLimit,
  viewLimitError,
  expiration,
  expirationError,
  handleSecretChange,
  handleViewLimitChange,
  handleExpirationChange,
  handleSubmit,
  isLoading,
  hasPostError,
}) {
  return (
    <form className='secret-form'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Set view limit...'
          value={viewLimit}
          onChange={handleViewLimitChange}
          className={viewLimitError ? "error" : ""}
        />
        <p className='error-msg'>
          {viewLimitError ? "Has to be a number greater than 0" : ""}
        </p>
      </div>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Set expiration time in minutes...'
          value={expiration}
          onChange={handleExpirationChange}
          className={expirationError ? "error" : ""}
        />
        <p className='error-msg'>
          {expirationError ? "Has to be a positive number" : ""}
        </p>
      </div>
      <div className='input-container'>
        <textarea
          id='secret'
          rows='4'
          cols='50'
          placeholder='Type your secret message here...'
          value={secret}
          onChange={handleSecretChange}
          className={secretError ? "error" : ""}
        />
        <p className='error-msg'>
          {secretError ? "Secret is required" : ""}
          {hasPostError ? "Something went wrong" : ""}
        </p>
      </div>
      <button onClick={handleSubmit} disabled={isLoading}>
        Save Secret
      </button>
    </form>
  );
}

export default SecretForm;
