import * as ACTION_TYPE from '../action/tvshowLatestAction'

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
}

export default function tvshowLatestReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACTION_TYPE.TVSHOW_LATEST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ACTION_TYPE.TVSHOW_LATEST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data
      }
    case ACTION_TYPE.TVSHOW_LATEST_FAILURE:
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