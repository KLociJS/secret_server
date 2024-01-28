import React from "react";
import useViewSecretForm from "./Hooks/useViewSecretForm";

import DisplaySecret from "./Components/DisplaySecret";
import ViewSecretForm from "./Components/ViewSecretForm";
import "./ViewSecret.css";

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
    resetForm,
  } = useViewSecretForm();

  return (
    <div className='container-column'>
      {isSuccessfulFetch ? (
        <DisplaySecret secret={secret} resetForm={resetForm} />
      ) : (
        <>
          <h1>View Secret</h1>
          <p>
            Access secret with provided hash code. Secrets can be retrieved a
            limited amount of time.
          </p>
          <ViewSecretForm
            secretHash={secretHash}
            handleHashChange={handleHashChange}
            handlePasteClick={handlePasteClick}
            fetchError={fetchError}
            handleViewSecret={handleViewSecret}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
};

export default ViewSecret;
