import { useState } from "react";
import { API_ENDPOINTS } from "../../../Constants/Constants";

function useGetSecret(secretHash) {
  const [secret, setSecret] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfulFetch, setIsSuccessfulFetch] = useState(false);

  const getSecret = () => {
    setIsLoading(true);
    fetch(API_ENDPOINTS.GET_SECRET + secretHash)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setFetchError(true);
        throw new Error("Failed to fetch secret");
      })
      .then((data) => {
        setSecret(data);
        setIsSuccessfulFetch(true);
        console.log(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  return {
    secret,
    fetchError,
    setFetchError,
    isLoading,
    isSuccessfulFetch,
    getSecret,
  };
}

export default useGetSecret;
