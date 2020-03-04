import * as ACTION_TYPE from '../action/movieUpComingAction'

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
}

export default function movieUpComingReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACTION_TYPE.MOVIE_UPCOMING_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ACTION_TYPE.MOVIE_UPCOMING_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data
      }
    case ACTION_TYPE.MOVIE_UPCOMING_FAILURE:
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