import config from '../../config'
import axios from 'axios'

/* ------------------ ACTION TYPE ------------------ */
export const MOVIE_UPCOMING_BEGIN = 'MOVIE_UPCOMING_BEGIN'
export const MOVIE_UPCOMING_SUCCESS = 'MOVIE_UPCOMING_SUCCESS'
export const MOVIE_UPCOMING_FAILURE = 'MOVIE_UPCOMING_FAILURE'


/* --------------- ACTION CREATORS -------------- */
export function fetchMoviesUpComing() {
  return dispatch => {
    dispatch(movieUpComingBegin())
    axios
      .get(`${config.baseURLMovie}/movie/upcoming?api_key=${config.apiKey}&language=en-US&page=1`)
      .then(( data ) => {
        dispatch(movieUpComingSuccess(data))        
    })
      .catch((error) => {
        dispatch(movieUpComingFailure(error))
    })
  }
}

export const movieUpComingBegin = () => {
  return {
    type: MOVIE_UPCOMING_BEGIN
  }
}

export const movieUpComingSuccess = data => {
  return {
    type: MOVIE_UPCOMING_SUCCESS,
    payload: data
  }
}

export const movieUpComingFailure = error => {
  return {
    type: MOVIE_UPCOMING_FAILURE,
    payload: { error }
  }
}