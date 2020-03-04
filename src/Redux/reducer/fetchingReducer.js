import * as ACTION_TYPE from '../action/fetchingAction'

const INITIAL_STATE = {
  isValidated: false,
  isEmptyField: false
}

export const fetchingReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_TYPE.IS_VALIDATED:
      return {
        isValidated: true,
        isEmptyField: false
      }
    case ACTION_TYPE.IS_EMPTY:
      return {
        isEmptyField: true,
        isValidated: false
      }
    case ACTION_TYPE.UNSUBSCRIBE_FETCH:
      return {
        isEmptyField: false,
        isValidated: false
      }
    default:
      return state
  }
}

export default fetchingReducer