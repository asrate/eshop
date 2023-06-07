import axios from "axios";

// This is often used to check whether a web application is
//  running in a development environment or a production environment

const isDevelopment = window.location.hostname.includes("localhost");

const getServer = () => {
  return isDevelopment ? "http://localhost:5000" : "";
};
export { getServer };
