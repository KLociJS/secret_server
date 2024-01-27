import { useState } from "react";
import { API_ENDPOINTS } from "../../../Constants/Constants";

function useFetch() {
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
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setPostSuccessData(data);
        console.log(data);
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
  };
}

export default useFetch;
