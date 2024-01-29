import React from "react";
import FormInput from "../../../Components/FormInput";

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
      <FormInput
        name='secretHash'
        label='Secret hash'
        value={secretHash}
        onChange={handleHashChange}
        placeholder='Secret redeem code...'
        hasError={fetchError}
        errorMessage='Secret not found.'
      />

      <button onClick={handleViewSecret} disabled={isLoading}>
        View Secret
      </button>
    </form>
  );
};

export default ViewSecretForm;
