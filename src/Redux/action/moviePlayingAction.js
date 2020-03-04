import config from '../../config'
import axios from 'axios'

/* ------------------ ACTION TYPE ------------------ */
export const MOVIE_PLAYING_BEGIN = 'FETCH_MOVIE_PLAYING_BEGIN'
export const MOVIE_PLAYING_SUCCESS = 'FETCH_MOVIE_PLAYING_SUCCESS'
export const MOVIE_PLAYING_FAILURE = 'FETCH_MOVIE_PLAYING_FAILURE'


/* --------------- ACTION CREATORS -------------- */
export function fetchMoviesPlaying() {
  return dispatch => {
    dispatch(moviePlayingBegin())
    axios
      .get(`${config.baseURLMovie}/movie/now_playing?api_key=${config.apiKey}&language=en-US&page=1`)
      .then(( data ) => {
        dispatch(moviePlayingSuccess(data))        
    })
      .catch((error) => {
        dispatch(moviePlayingFailure(error))
    })
  }
}

export const moviePlayingBegin = () => {
  return {
    type: MOVIE_PLAYING_BEGIN
  }
}

export const moviePlayingSuccess = data => {
  return {
    type: MOVIE_PLAYING_SUCCESS,
    payload: data
  }
}

export const moviePlayingFailure = error => {
  return {
    type: MOVIE_PLAYING_FAILURE,
    payload: { error }
  }
}