import React from "react";
import useViewSecretForm from "./Hooks/useViewSecretForm";

const ViewSecret = () => {
  const {
    secretHash,
    handleViewSecret,
    handlePasteClick,
    handleHashChange,
    secret,
    fetchError,
    isLoading,
    isSuccessfulFetch,
  } = useViewSecretForm();

  return (
    <div className='container-column'>
      {isSuccessfulFetch ? (
        <>
          <h1>Secret</h1>
          <p>Here is your secret.</p>
          <p>{secret.secretText}</p>
        </>
      ) : (
        <>
          <h1>View Secret</h1>
          <p>
            Access secret with provided hash code. Secrets can be retrieved a
            limited amount of time.
          </p>
          <form>
            <div className='input-container'>
              <input
                type='text'
                placeholder='Secret redeem code...'
                value={secretHash}
                onChange={handleHashChange}
                onClick={handlePasteClick}
              />
              <p className='error-msg'>
                {fetchError ? "Secret not found." : ""}
              </p>
            </div>
            <button onClick={handleViewSecret} disabled={isLoading}>
              View Secret
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ViewSecret;
