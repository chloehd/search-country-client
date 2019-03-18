import axios from "axios";

const backendApi = axios.create({
  baseURL: "https://locahost:5000",
  withCredentials: true
});


function errorHandler(err) {
  if (err.response && err.response.data) {
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }
  throw err;
}


export function getCountries() {
  return backendApi.get("/api/countries").catch(errorHandler);
}