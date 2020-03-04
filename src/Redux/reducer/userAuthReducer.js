import * as ACTION_TYPE from '../action/userAuthAction'

/* ----- INITIAL STATE ----- */
const INITIAL_STATE = {
  username: '',
  auth: false,
  email: '',
  password: '',
  success: false,  
  loading: false
}

/* ------- REDUCER --------- */
const userAuthReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_TYPE.LOGIN_BEGIN:
      return {
        ...state,
        success: false,
        loading: true
      }
    case ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
        success: true,        
        loading: false
      }
    case ACTION_TYPE.LOGIN_FAILURE:
      return {
        ...state,
        auth: false,
        loading: false
      }    
    case ACTION_TYPE.REGISTER_BEGIN:
      return {
        ...state,
        loading: true,
        success: false
      }
    case ACTION_TYPE.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      }
    case ACTION_TYPE.REGISTER_FAILURE:
      return {
        ...state,
        success: false,
        loading: false
      }
    default:
      return state
  }
}

export default userAuthReducer