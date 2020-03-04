import CartTicketReducer from '../cartTicketReducer'
import UserAuthReducer from '../userAuthReducer'
import FetchingReducer from '../fetchingReducer'
import MoviePopReducer from '../moviePopReducer'
import MoviePlayingReducer from '../moviePlayingReducer'
import MovieUpComingReducer from '../movieUpComingReducer'
import TvshowPopReducer from '../tvshowPopReducer'
import TvshowOnAirReducer from '../tvshowOnAirReducer'
import TvshowLatestReducer from '../tvshowLatestReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cartTicketReducer: CartTicketReducer,
  userAuthReducer: UserAuthReducer,
  fetchingReducer: FetchingReducer,
  moviePopReducer: MoviePopReducer,
  moviePlayingReducer: MoviePlayingReducer,
  movieUpComingReducer: MovieUpComingReducer,
  tvshowPopReducer: TvshowPopReducer,
  tvshowOnAirReducer: TvshowOnAirReducer,
  tvshowLatestReducer: TvshowLatestReducer,
})

export default rootReducer