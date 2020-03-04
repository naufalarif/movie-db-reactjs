export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_BEGIN = 'REGISTER_BEGIN'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

/* ------------- LOGIN ------------ */
export const loginBegin = () => {
  return {
    type: LOGIN_BEGIN
  }
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  }
}

/* ------------- REGISTER ------------ */

export const registerBegin = () => {
  return {
    type: REGISTER_BEGIN
  }
}

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  }
}

export const registerFailure = () => {
  return {
    type: REGISTER_FAILURE
  }
}