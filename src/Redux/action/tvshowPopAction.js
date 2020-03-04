import config from '../../config'
import axios from 'axios'

/* ------------------ ACTION TYPE ------------------ */
export const TVSHOW_POP_REQUEST = 'TVSHOW_POP_REQUEST'
export const TVSHOW_POP_SUCCESS = 'TVSHOW_POP_SUCCESS'
export const TVSHOW_POP_FAILURE = 'TVSHOW_POP_FAILURE'


/* --------------- ACTION CREATORS -------------- */
export function fetchTvshowPop() {
  return dispatch => {
    dispatch(tvshowPopRequest())
    axios
      .get(`${config.baseURLTvshow}tv/popular?api_key=${config.apiKey}&language=en-US&page=1`)
      .then(( data ) => {
        dispatch(tvshowPopSuccess(data))        
    })
      .catch((error) => {
        dispatch(tvshowPopFailure(error))
    })
  }
}

export const tvshowPopRequest = () => {
  return {
    type: TVSHOW_POP_REQUEST
  }
}

export const tvshowPopSuccess = data => {
  return {
    type: TVSHOW_POP_SUCCESS,
    payload: data
  }
}

export const tvshowPopFailure = error => {
  return {
    type: TVSHOW_POP_FAILURE,
    payload: { error }
  }
}