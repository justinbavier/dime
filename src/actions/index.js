import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  // const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: "payload" });
};

export const resetPassword = values => async dispatch => {
  const redirect = `${process.env.REDIRECT}`;
  const res = await axios({
    method: 'post',
    url: "http://" + redirect + "/api/users/resetPassword",
    data: values
  });

  console.log(redirect);
  dispatch({ type: FETCH_USER, payload: values })
};
