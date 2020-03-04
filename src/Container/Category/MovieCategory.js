import React, { Component } from 'react'
import NavigationBar from '../../Components/navigation/NavigationBar'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import * as ACTION_POP from '../../Redux/action/moviePopAction'
import * as ACTION_PLAYING from '../../Redux/action/moviePlayingAction'
import * as ACTION_UPCOMING from '../../Redux/action/movieUpComingAction'

import CardMovie from '../../Components/card/CardMovie'

class MovieCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      visible: 6
    }
  }

  componentDidMount() {
    this.props.fetchMoviesPop()
    this.props.fetchMoviesPlaying()
    this.props.fetchMoviesUpComing()    
  }

  getMoviePop = () => {
    const { payload } = this.props    
    this.props.fetchMoviesPop()
    if ( payload === undefined ) {
      this.props.moviePopBegin()
      return (
        <div className="loading-form">
          <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    } else {
      try {
        const data = payload.results
        this.props.moviePopSuccess()
        return (
          <div>
            <CardMovie results={data.slice(0, 5)}/>
          </div>
        )
      } catch {
        this.props.moviePopFailure()
      }
    }    
  }

  render() {    
    const { payloadPop, payloadPlaying, payloadUpComing } = this.props
    const { visible } = this.state
    const dataPlaying = payloadPlaying.results
    const dataPop = payloadPop.results
    const dataUpComing = payloadUpComing.results    
    return(
      <div>
        <NavigationBar />
        <div className="container-home">
          <div className="container category">
            <div className="d-flex">
              <h4>Popular on Netflix</h4>
              <p className="ml-auto">Show More</p>
            </div>
            <div className="">
              {
                // this.getMoviePop()
                dataPop === undefined
                ? null
                : <CardMovie results={dataPop.slice(0, visible)}/>
              }
            </div>
          </div>
          <div className="container category">
            <div className="d-flex">
              <h4>Now Playing on Netflix</h4>
              <p className="ml-auto">Show More</p>
            </div>
            <div className="">
              {
                dataPlaying === undefined
                ? null
                : <CardMovie results={dataPlaying.slice(0, visible)}/>
              }
            </div>
          </div>
          <div className="container category">
            <div className="d-flex">
              <h4>Up Coming on Netflix</h4>
              <p className="ml-auto" onClick={() => this.props.history.push('/movie/upcoming')}>Show More</p>
            </div>
            <div className="">
              {
                dataUpComing === undefined
                ? null
                : <CardMovie results={dataUpComing.slice(0, visible)}/>
              }
            </div>
          </div>          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    payloadPop: state.moviePopReducer.items,
    payloadPlaying: state.moviePlayingReducer.items,
    payloadUpComing: state.movieUpComingReducer.items,
    loadingPop: state.moviePopReducer.loading,
    errorPop: state.moviePopReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesPop: () => dispatch(ACTION_POP.fetchMoviesPop()),
    moviePopBegin: () => dispatch(ACTION_POP.moviePopBegin()),
    moviePopSuccess: () => dispatch(ACTION_POP.moviePopSuccess()),
    moviePopFailure: () => dispatch(ACTION_POP.moviePopFailure()),
    fetchMoviesPlaying: () => dispatch(ACTION_PLAYING.fetchMoviesPlaying()),
    fetchMoviesUpComing: () => dispatch(ACTION_UPCOMING.fetchMoviesUpComing())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) 
  (MovieCategory)
)