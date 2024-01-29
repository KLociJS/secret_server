import React from "react";
import FormInput from "../../../Components/FormInput";

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
    <form className='form'>
      <FormInput
        name='viewLimit'
        label='View limit'
        value={viewLimit}
        onChange={handleViewLimitChange}
        hasError={viewLimitError}
        errorMessage='Has to be a number greater than 0'
        placeholder='Set view limit...'
        type='number'
      />

      <FormInput
        name='expiration'
        label='Expiration'
        value={expiration}
        onChange={handleExpirationChange}
        hasError={expirationError}
        errorMessage='Has to be a positive number'
        placeholder='Set expiration time in minutes...'
        type='number'
      />

      <div className='input-container'>
        <label htmlFor='secret' className={secretError ? "error" : ""}>
          Secret message
        </label>
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
          {hasPostError ? "Server may be down" : ""}
        </p>
      </div>

      <button onClick={handleSubmit} disabled={isLoading}>
        Save Secret
      </button>
    </form>
  );
}

export default SecretForm;
