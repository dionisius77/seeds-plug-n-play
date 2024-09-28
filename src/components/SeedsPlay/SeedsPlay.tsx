// import axios, { AxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";

export type SeedsPlayProps = {
  userId: string;
  userName: string;
}

const SeedsPlay = ({ userId, userName }: SeedsPlayProps) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const tokenExchange = useCallback(() => {
    setLoading(true);
    fetch("https://api.seeds.finance/auth/v1/whitelabel/access-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        user_name: userName,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setToken(data.access_token);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage(error.message || "Unknown error");
      });
    
  }, []);

  useEffect(() => {
    tokenExchange();
  }, [tokenExchange]);

  return loading ? (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      Loading...
    </div>
  ) : token ? (
    <iframe
      style={{
        width: "100%",
        height: "100%"
      }}
      src={`https://seeds-b2b-client.web.app?token=${token}`}
    />
  ) : (
    <div>{errorMessage}</div>
  );
};

export default SeedsPlay;