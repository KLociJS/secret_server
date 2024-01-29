import SecretForm from "./components/SecretForm";

import SecretSaveSuccess from "./components/SecretSaveSuccess";
import usePostSecretForm from "./hooks/usePostSecretForm";

import "./CreateSecret.css";

const CreateSecret = () => {
  // Handle secret creation: displaying secret form or success message and hash
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
      {/* 
        If the save was successful display message and secret hash
        otherwise display secret form 
      */}
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
