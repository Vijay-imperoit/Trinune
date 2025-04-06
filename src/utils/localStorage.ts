export const getPathHistory = () => {
  return JSON.parse(localStorage.getItem("pathHistory") || "[]");
};
export const removePathHistory = () => {
  return localStorage.removeItem("pathHistory");
};
