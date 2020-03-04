import * as ACTION_TYPE from '../action/cartTicketAction'

/* ----- INITIAL STATE ------- */
const INITIAL_STATE = {
  counter: 0,
  success: false,
  title: ''
}

/* ---------- Reducer --------- */
const cartTicketReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_TYPE.INCREMENT:
      if(state.counter === 0) {
        return {
          counter: state.counter + 1,
          success: true
        }
      } else {
        return {
          counter: state.counter + 1  
        }
      }
    case ACTION_TYPE.DECREMENT:
      if(state.counter === 0) {
        return {          
          success: false,
          counter: 0
        }
      } else {
        return {
          counter: state.counter - 1
        }
      }
    case ACTION_TYPE.BOOKED_TITLE:
      return {
        title: action.payload
      }
    default:
      return state
  }
}

export default cartTicketReducer