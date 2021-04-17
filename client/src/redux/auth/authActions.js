import * as type from './authTypes'
import axios from 'axios'

// TODO: Write error handlers for the login and register actions

export const login = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type' : 'application/json'
    },
  };

  const body = JSON.stringify({email, password})
  await axios
    .post('http://localhost:5050/auth/login', body, config)
    .then(async res => {
      await dispatch({
        type: type.LOGIN_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: type.LOGIN_FAILURE,
      })
    })
}

export const register = ({email, name, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type' : 'application/json'
    },
  };

  const body = JSON.stringify({email, name, password})
  await axios
    .post('http://localhost:5050/auth/register', body, config)
    .then(async res => {
      await dispatch({
        type: type.REGISTER_FAILURE,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: type.REGISTER_FAILURE,
      })
    })
}