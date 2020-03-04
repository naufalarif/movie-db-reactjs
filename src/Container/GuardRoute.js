import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import _ from 'lodash'

class GuardRoutes extends Component { 
  render() {    
    const { component: Component, ...rest} = this.props
    const authToken = localStorage.getItem('token')

    return(
      <Route
        {...rest}
        render={props => (
          !_.isEmpty(authToken)
          ? <Component {...props} />
          : <Redirect to={{ 
              pathname: '/login',
              state: { from: props.location} 
            }} />
        )} />    
    )    
  }
}

export default GuardRoutes