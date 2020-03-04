import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RegisterPage from './Container/OnBoarding/RegisterPage'
import LoginPage from './Container/OnBoarding/LoginPage'
import HomePage from './Container/HomePage'
import DetailPage from './Container/DetailPage'
import GuardRoutes from './Container/GuardRoute'
import ProfilePage from './Container/Account/ProfilePage'
import BookTicket from './Container/BookTicket'
import MovieCategory from './Container/Category/MovieCategory'
import TvshowCategory from './Container/Category/TvshowCategory'
import UpComingMovie from './Container/Category/movie/UpComingMovie'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <GuardRoutes exact path='/' component={HomePage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={LoginPage} />
          <GuardRoutes path='/profilepage' component={ProfilePage} />
          <GuardRoutes path='/detailpage/:id' component={DetailPage} />
          <GuardRoutes path='/bookticketpage' component={BookTicket} />
          <GuardRoutes path='/movie/upcoming' component={UpComingMovie} />
          <GuardRoutes path='/movie' component={MovieCategory} />
          <GuardRoutes path='/tvshow' component={TvshowCategory} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Routes