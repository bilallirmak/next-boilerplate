export const getAuthHeader = async () => {
  const token = localStorage.getItem("token");

  return {
    "x-access-token": token,
  };
};
