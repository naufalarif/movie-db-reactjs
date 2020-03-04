import config from '../../config'
import axios from 'axios'

/* ------------------ ACTION TYPE ------------------ */
export const TVSHOW_ONAIR_REQUEST = 'TVSHOW_ONAIR_REQUEST'
export const TVSHOW_ONAIR_SUCCESS = 'TVSHOW_ONAIR_SUCCESS'
export const TVSHOW_ONAIR_FAILURE = 'TVSHOW_ONAIR_FAILURE'


/* --------------- ACTION CREATORS -------------- */
export function fetchTvshowOnAir() {
  return dispatch => {
    dispatch(tvshowOnAirRequest())
    axios
      .get(`${config.baseURLTvshow}tv/on_the_air?api_key=${config.apiKey}&language=en-US&page=1`)
      .then(( data ) => {
        dispatch(tvshowOnAirSuccess(data))        
    })
      .catch((error) => {
        dispatch(tvshowOnAirFailure(error))
    })
  }
}

export const tvshowOnAirRequest = () => {
  return {
    type: TVSHOW_ONAIR_REQUEST
  }
}

export const tvshowOnAirSuccess = data => {
  return {
    type: TVSHOW_ONAIR_SUCCESS,
    payload: data
  }
}

export const tvshowOnAirFailure = error => {
  return {
    type: TVSHOW_ONAIR_FAILURE,
    payload: { error }
  }
}