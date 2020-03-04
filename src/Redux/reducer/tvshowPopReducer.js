import * as ACTION_TYPE from '../action/tvshowPopAction'

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
}

export default function tvshowPopReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACTION_TYPE.TVSHOW_POP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ACTION_TYPE.TVSHOW_POP_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data
      }
    case ACTION_TYPE.TVSHOW_POP_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default:
      return state
  }
}