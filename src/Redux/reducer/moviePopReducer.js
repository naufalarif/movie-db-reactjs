import * as ACTION_TYPE from '../action/moviePopAction'

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
}

export default function moviePopReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACTION_TYPE.MOVIE_POP_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ACTION_TYPE.MOVIE_POP_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data
      }
    case ACTION_TYPE.MOVIE_POP_FAILURE:
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