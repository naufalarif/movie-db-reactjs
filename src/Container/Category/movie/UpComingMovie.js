import React, { Component } from 'react'
import { withRouter } from 'react-router'
import _ from 'lodash'

import { connect } from 'react-redux'
import * as ACTION from '../../../Redux/action/movieUpComingAction'
import CardMovie from '../../../Components/card/CardMovie'

class UpComingMovie extends Component {

  componentDidMount() {
    this.props.fetchMoviesUpComing()
  }

  render() {
    const { payload } = this.props
    const data = !_.isEmpty(payload) ? payload.results : []
    if(this.props.loading) {
      return <div className="loading-form">
              <div className="spinner-border text-danger" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
            </div>
    } else {
    return(
      <div className="container">
        <div>          
              <div>
                <CardMovie results={data.slice(0,5)} />
                <br/>
                <CardMovie results={data.slice(6,11)} />
                <br/>
                <CardMovie results={data.slice(12,17)} />
                <br/>
                <CardMovie results={data.slice(18,20)} />
              </div>          
        </div>
      </div>
    )
  }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.movieUpComingReducer.loading,
    payload: state.movieUpComingReducer.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesUpComing: () => dispatch(ACTION.fetchMoviesUpComing())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
  (UpComingMovie)
)