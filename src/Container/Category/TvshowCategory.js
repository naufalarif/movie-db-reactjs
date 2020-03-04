import React, { Component } from 'react'
import NavigationBar from '../../Components/navigation/NavigationBar'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import * as ACTION_POP from '../../Redux/action/tvshowPopAction'
import * as ACTION_PLAYING from '../../Redux/action/tvshowOnAirAction'
import * as ACTION_UPCOMING from '../../Redux/action/tvshowLatestAction'

import CardTvshow from '../../Components/card/CardTvshow'

class TvshowCategory extends Component {
  constructor(props) {
    super(props)
      this.state = {
        id: 0,
      }
  }

  componentDidMount() {
    this.props.fetchTvshowPop()
    this.props.fetchTvshowOnAir()
    this.props.fetchTvshowLatest()    
  }

  render() {    
    const { payloadPop, payloadOnAir, payloadLatest } = this.props
    const dataOnAir = payloadOnAir.results
    const dataPop = payloadPop.results
    const dataLatest = payloadLatest.results
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
                dataPop === undefined
                ? null
                : <CardTvshow results={dataPop.slice(0, 5)}/>
              }
            </div>
          </div>
          <div className="container category">
            <div className="d-flex">
              <h4>On Air on Netflix</h4>
              <p className="ml-auto">Show More</p>
            </div>
            <div className="">
              {
                dataOnAir === undefined
                ? null
                : <CardTvshow results={dataOnAir.slice(0, 5)}/>
              }
            </div>
          </div>
          {/* <div className="container category">
            <div className="d-flex">
              <h4>Latest on Netflix</h4>
              <p className="ml-auto">Show More</p>
            </div>      
            <div className="">
              {
                dataLatest === undefined
                ? null
                : <CardTvshow results={dataLatest.slice(0, 5)}/>
              }
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    payloadPop: state.tvshowPopReducer.items,
    payloadOnAir: state.tvshowOnAirReducer.items,
    payloadLatest: state.tvshowLatestReducer.items,
    loading: state.tvshowPopReducer.loading,
    error: state.tvshowPopReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTvshowPop: ()=> dispatch(ACTION_POP.fetchTvshowPop()),
    fetchTvshowOnAir: ()=> dispatch(ACTION_PLAYING.fetchTvshowOnAir()),
    fetchTvshowLatest: ()=> dispatch(ACTION_UPCOMING.fetchTvshowLatest())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) 
  (TvshowCategory)
)