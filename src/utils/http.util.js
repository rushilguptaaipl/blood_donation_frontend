import axios from "axios";
import { showSuccessMessage, showErrorMessage, showWarningMessage } from "./swal.util"


export const get = async (params, endpoint) => {
  const token = window.localStorage.getItem("access-token");
  return axios
    .get(`http://localhost:3000/${endpoint}`, {
      params: params,
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      showErrorMessage(error.response.data.message)
      console.error("Error fetching data:", error);
    });
}


export const post = async (body, endpoint) => {
  const token = window.localStorage.getItem("access-token");
  return axios
    .post(
      `http://localhost:3000/${endpoint}`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      if (response?.data?.message) {
        showSuccessMessage(response.data.message)
      }
      return response.data
    })
    .catch((error) => {
      console.log(error);
      showErrorMessage(error.response.data.message)
    });
}