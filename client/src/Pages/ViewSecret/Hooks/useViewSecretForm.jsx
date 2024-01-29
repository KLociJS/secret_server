import { useState } from "react";
import useGetSecret from "./useGetSecret";

function useViewSecretForm() {
  // Custom hook for handling view secret form state, validating data and post action
  const [secretHash, setSecretHash] = useState("");

  const {
    secret,
    fetchError,
    setFetchError,
    isLoading,
    isSuccessfulFetch,
    getSecret,
    resetForm,
  } = useGetSecret(secretHash, setSecretHash);

  const handleViewSecret = (e) => {
    e.preventDefault();

    getSecret(secretHash);
  };

  const handlePasteClick = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      handleHashChange(clipboardText);
      setFetchError(false);
    } catch (error) {
      console.error("Failed to read clipboard text:", error);
    }
  };

  const handleHashChange = (e) => {
    setFetchError(false);
    setSecretHash(e.target.value);
  };

  return {
    secretHash,
    handleViewSecret,
    handlePasteClick,
    handleHashChange,
    secret,
    fetchError,
    isLoading,
    isSuccessfulFetch,
    resetForm,
  };
}

export default useViewSecretForm;
