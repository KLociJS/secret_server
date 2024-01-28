import { useState } from "react";
import usePostSecret from "./usePostSecret";

function usePostSecretForm() {
  const [secret, setSecret] = useState("");
  const [secretError, setSecretError] = useState(false);
  const [viewLimit, setViewLimit] = useState("");
  const [viewLimitError, setViewLimitError] = useState(false);
  const [expiration, setExpiration] = useState("");
  const [expirationError, setExpirationError] = useState(false);

  const {
    postData,
    isLoading,
    hasPostError,
    isPostSuccess,
    postSuccessData,
    setIsPostSuccess,
    setPostSuccessData,
  } = usePostSecret();

  const handleSecretChange = (e) => {
    setSecret(e.target.value);
    setSecretError(false);
  };

  const handleViewLimitChange = (e) => {
    setViewLimit(e.target.value);
    setViewLimitError(false);
  };

  const handleExpirationChange = (e) => {
    setExpiration(e.target.value);
    setExpirationError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isExpirationValid = /^(?:0|[1-9]\d*)$/.test(expiration);
    const isViewLimitValid = /^[1-9]\d*$/.test(viewLimit);
    const isSecretValid = secret.length > 0;

    if (!isExpirationValid) {
      setExpirationError(true);
    }

    if (!isViewLimitValid) {
      setViewLimitError(true);
    }

    if (!isSecretValid) {
      setSecretError(true);
    }

    if (!isExpirationValid || !isViewLimitValid || !isSecretValid) {
      return;
    }

    const formData = new FormData();

    formData.append("secret", secret);
    formData.append("expireAfterViews", viewLimit);
    formData.append("expireAfter", expiration);

    postData(formData);
  };

  const resetCreateSecret = () => {
    setSecret("");
    setSecretError(false);
    setViewLimit("");
    setViewLimitError(false);
    setExpiration("");
    setExpirationError(false);
    setIsPostSuccess(false);
    setPostSuccessData({});
  };

  return {
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
  };
}

export default usePostSecretForm;
