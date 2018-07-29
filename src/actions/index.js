import apisauce from 'apisauce';
import { FETCH_USER } from "./types";

const applicationJson = { 'Content-Type': 'application/json' }

const create = () => {
  const api = apisauce.create({
    baseURL: process.env.REACT_APP_REDIRECT,
    timeout: 10000
  })

  const resetPassword = async (data, resetToken) => {
    const resp = await api.post('/users/resetPassword', { data, resetToken }, {
      applicationJson
    })
    return resp;
  }

  return {
    resetPassword
  }
}

export const fetchUser = () => async dispatch => {
  dispatch({ type: FETCH_USER, payload: "payload" });
};

const api = create();

export const resetPassword = (values, resetToken) => async dispatch => {
  const resp = await api.resetPassword(values, resetToken);
  dispatch({ type: FETCH_USER, payload: values })
};
