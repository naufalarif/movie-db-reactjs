import config from '../../config'
import axios from 'axios'

/* ------------------ ACTION TYPE ------------------ */
export const TVSHOW_LATEST_REQUEST = 'TVSHOW_LATEST_REQUEST'
export const TVSHOW_LATEST_SUCCESS = 'TVSHOW_LATEST_SUCCESS'
export const TVSHOW_LATEST_FAILURE = 'TVSHOW_LATEST_FAILURE'


/* --------------- ACTION CREATORS -------------- */
export function fetchTvshowLatest() {
  return dispatch => {
    dispatch(tvshowLatestRequest())
    axios
      .get(`${config.baseURLTvshow}tv/latest?api_key=${config.apiKey}&language=en-US&page=1`)
      .then(( data ) => {
        dispatch(tvshowLatestSuccess(data))        
    })
      .catch((error) => {
        dispatch(tvshowLatestFailure(error))
    })
  }
}

export const tvshowLatestRequest = () => {
  return {
    type: TVSHOW_LATEST_REQUEST
  }
}

export const tvshowLatestSuccess = data => {
  return {
    type: TVSHOW_LATEST_SUCCESS,
    payload: data
  }
}

export const tvshowLatestFailure = error => {
  return {
    type: TVSHOW_LATEST_FAILURE,
    payload: { error }
  }
}