import * as ACTION_TYPE from '../action/moviePlayingAction'

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
}

export default function moviePlayingReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACTION_TYPE.MOVIE_PLAYING_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ACTION_TYPE.MOVIE_PLAYING_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data
      }
    case ACTION_TYPE.MOVIE_PLAYING_FAILURE:
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