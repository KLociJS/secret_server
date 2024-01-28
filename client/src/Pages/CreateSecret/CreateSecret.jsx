import React from "react";

import "./CreateSecret.css";
import SecretForm from "./components/SecretForm";

import SecretSaveSuccess from "./components/SecretSaveSuccess";
import usePostSecretForm from "./hooks/usePostSecretForm";

const CreateSecret = () => {
  const {
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
    isPostSuccess,
    postSuccessData,
    resetCreateSecret,
  } = usePostSecretForm();

  return (
    <div className='container-column'>
      {isPostSuccess ? (
        <SecretSaveSuccess
          postSuccessData={postSuccessData}
          resetCreateSecret={resetCreateSecret}
        />
      ) : (
        <>
          <h1>Create secret</h1>
          <p>
            Provide details for your secret. View limit has to be positive
            number. Expiration in minutes, 0 means no expiration.{" "}
          </p>
          <SecretForm
            secret={secret}
            secretError={secretError}
            viewLimit={viewLimit}
            viewLimitError={viewLimitError}
            expiration={expiration}
            expirationError={expirationError}
            handleSecretChange={handleSecretChange}
            handleViewLimitChange={handleViewLimitChange}
            handleExpirationChange={handleExpirationChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            hasPostError={hasPostError}
          />
        </>
      )}
    </div>
  );
};

export default CreateSecret;
