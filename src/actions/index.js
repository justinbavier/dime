import apisauce from 'apisauce';
import { FETCH_USER } from "./types";

const applicationJson = { 'Content-Type': 'application/json' }

const create = () => {
  const api = apisauce.create({
    baseURL: 'http://localhost:3000/api/',
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
  console.log(resetToken)
  const resp = await api.resetPassword(values, resetToken);
  console.log(resp, 'resp!')
  dispatch({ type: FETCH_USER, payload: values })
};
