import { useState } from "react";
import { API_ENDPOINTS } from "../../../Constants/Constants";

function usePostSecret() {
  // Handle fetching the data from the server
  // Loading => Request => Success/Error => Loaded
  const [isLoading, setIsLoading] = useState(false);
  const [hasPostError, setHasPostError] = useState(false);
  const [isPostSuccess, setIsPostSuccess] = useState(false);
  const [postSuccessData, setPostSuccessData] = useState({});

  const postData = (formData) => {
    setIsLoading(true);

    fetch(API_ENDPOINTS.CREATE_SECRET, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          setIsPostSuccess(true);
          return res.json();
        } else {
          throw new Error("Server may be down");
        }
      })
      .then((data) => {
        setPostSuccessData(data);
      })
      .catch((err) => {
        console.log(err);
        setHasPostError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    postData,
    isLoading,
    hasPostError,
    isPostSuccess,
    postSuccessData,
    setIsPostSuccess,
    setPostSuccessData,
  };
}

export default usePostSecret;
