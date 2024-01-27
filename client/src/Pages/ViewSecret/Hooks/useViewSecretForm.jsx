import { useState } from "react";
import useGetSecret from "./useGetSecret";

function useViewSecretForm() {
  const [secretHash, setSecretHash] = useState("");

  const {
    secret,
    fetchError,
    setFetchError,
    isLoading,
    isSuccessfulFetch,
    getSecret,
  } = useGetSecret(secretHash);

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
  };
}

export default useViewSecretForm;
