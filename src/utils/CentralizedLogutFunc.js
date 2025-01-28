import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

let isAlertShown = false; // To ensure alert is shown only once

export const handleUnauthorized = (error, dispatch, navigate) => {
  if (error.response?.status === 401 && !isAlertShown) {
    isAlertShown = true; // Set flag to true
    alert(error.response.data.error || "Your session has expired. Please login again.");
    dispatch(authActions.logout());
    localStorage.clear(); // Clear all stored tokens and IDs
    navigate("/login");
  }
};
