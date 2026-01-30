let token = null;

export const getAccessToken = async () => {
  if (token) return token;

  const res = await fetch(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_AMADEUS_KEY}&client_secret=${import.meta.env.VITE_AMADEUS_SECRET}`,
    },
  );

  const data = await res.json();
  token = data.access_token;
  return token;
};

export const searchFlights = async (params) => {
  const accessToken = await getAccessToken();
  const query = new URLSearchParams(params).toString();

  const res = await fetch(
    `https://test.api.amadeus.com/v2/shopping/flight-offers?${query}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  return res.json();
};
