import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  // const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: "payload" });
};

export const resetPassword = values => async dispatch => {
  console.log(values);
  const redirect = `${process.env.REDIRECT}`;
  const res = await axios({
    method: 'post',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      'dimekey': 'dime_dev_42069',
    },
    url: "http://localhost:3000/api/users/resetPassword",
    data: values
  });
  // console.log(redirect);
  dispatch({ type: FETCH_USER, payload: values })
};
