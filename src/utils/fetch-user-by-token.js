export const fetchUserByTokenh = (token, axios) =>
  axios.get("https://dummyjson.com/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
