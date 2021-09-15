export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://secret-temple-11924.herokuapp.com";
};
