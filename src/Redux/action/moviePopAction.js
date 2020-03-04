import config from '../../config'
import axios from 'axios'

/* ------------------ ACTION TYPE ------------------ */
export const MOVIE_POP_BEGIN = 'MOVIE_POP_BEGIN'
export const MOVIE_POP_SUCCESS = 'MOVIE_POP_SUCCESS'
export const MOVIE_POP_FAILURE = 'MOVIE_POP_FAILURE'


/* --------------- ACTION CREATORS -------------- */
export function fetchMoviesPop() {
  return dispatch => {
    dispatch(moviePopBegin())
    axios
      .get(`${config.baseURLMovie}/movie/popular?api_key=${config.apiKey}&language=en-US&page=1`)
      .then(( data ) => {
        dispatch(moviePopSuccess(data))        
    })
      .catch((error) => {
        dispatch(moviePopFailure(error))
    })
  }
}

export const moviePopBegin = () => {
  return {
    type: MOVIE_POP_BEGIN
  }
}

export const moviePopSuccess = data => {
  return {
    type: MOVIE_POP_SUCCESS,
    payload: data
  }
}

export const moviePopFailure = error => {
  return {
    type: MOVIE_POP_FAILURE,
    payload: { error }
  }
}