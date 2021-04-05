export const getAuthHeader = async () => {
  const token = localStorage.getItem("token");

  return {
    "Authorization": token,
  };
};
