import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import * as ACTION_POP from '../Redux/action/moviePopAction'
import * as ACTION_PLAYING from '../Redux/action/moviePlayingAction'
import * as ACTION_UPCOMING from '../Redux/action/movieUpComingAction'

import CardMovie from '../Components/card/CardMovie'
import NavigationBar from '../Components/navigation/NavigationBar'
import JumbotronBoarding from '../Components/JumbotronBoarding'

class HomePage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        id: 0,
        pop: [],
        playing: [],
        upcoming: []
      }
  }

  componentDidMount() {
    this.props.fetchMoviesPop()
    this.props.fetchMoviesPlaying()
    this.props.fetchMoviesUpComing()
  }

  handleClick = (idx) => {
    this.setState({
      id: idx
    })
    this.props.history.push(`/detailpage/${idx}`)
  }

  render() {    
    const { payloadPop, payloadPlaying } = this.props
    const dataPlaying = payloadPlaying.results
    const dataPop = payloadPop.results
    // const dataUpComing = payloadUpComing.results
    return(
      <div>
        <NavigationBar />
        <div className="container-home">
          <JumbotronBoarding />
          <div className="container category">
            <div className="d-flex">
              <h4>Popular on Netflix</h4>
              <p className="ml-auto">Show More</p>
            </div>
            <div>
              {
                dataPop === undefined
                ? null
                : <CardMovie results={dataPop.slice(0, 5)}/>
              }
            </div>
          </div>
          <div className="container category">
            <div className="d-flex">
              <h4>Now Playing on Netflix</h4>
              <p className="ml-auto">Show More</p>
            </div>
              {
                dataPlaying === undefined
                ? null
                : <CardMovie results={dataPlaying.slice(0, 5)}/>
              }
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
    loading: state.moviePopReducer.loading,
    error: state.moviePopReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesPop: ()=> dispatch(ACTION_POP.fetchMoviesPop()),
    fetchMoviesPlaying: ()=> dispatch(ACTION_PLAYING.fetchMoviesPlaying()),
    fetchMoviesUpComing: ()=> dispatch(ACTION_UPCOMING.fetchMoviesUpComing())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) 
  (HomePage)
)




// import RightArrow from '../static/assets/right-arrow.svg'
// import LeftArrow from '../static/assets/left-arrow.svg'
// import { Button } from 'reactstrap'

// nextSlidePop = () => {  
//   const { endPop, startPop, data } = this.state
//   if(endPop === data.length) {
//     this.setState({
//       endPop: 7,
//       startPop: 0
//     })
//   } else {
//     this.setState({
//       endPop: endPop + 7,
//       startPop: startPop + 7
//     })
//   }
// }

// nextSlideNow = () => {  
//   const { endNow, startNow, data } = this.state
//   if(endNow === data.length) {
//     this.setState({
//       endNow: 7,
//       startNow: 0
//     })
//   } else {
//     this.setState({
//       endNow: endNow + 7,
//       startNow: startNow + 7
//     })
//   }
// }

// prevSlidePop = () => {
//   const { startPop, endPop, data } = this.state
//   if(startPop === 0) {
//     this.setState({
//       startPop: data.length - 7,
//       endPop: data.length
//     })
//   } else {
//     this.setState({
//       endPop: endPop - 7,
//       startPop: startPop - 7
//     })
//   }
// }

// prevSlideNow = () => {
//   const { startNow, endNow, data } = this.state
//   if(startNow === 0) {
//     this.setState({
//       startNow: data.length - 7,
//       endNow: data.length
//     })
//   } else if(startNow === data.length -7) {
//     this.setState({
//       endNow: endNow - 7,
//       startNow: startNow - 7
//     })
//   }
//   console.log('end: ',endNow)
//   console.log('start: ',startNow)
// }



/* <div className="d-flex btn-toggle">
                <Button className="mr-auto" onClick={this.prevSlideNow}>
                  <img src={LeftArrow} width='20' height='20' alt=''/>
                </Button>
                <Button className="ml-auto" onClick={this.nextSlideNow}>
                  <img src={RightArrow} width='20' height='20' alt=''/>
                </Button>
                {
                  startNow === 0
                  ? null
                  : <Button className="mr-auto" onClick={this.prevSlideNow}>
                      <img src={LeftArrow} width='20' height='20' alt=''/>
                    </Button>
                }
                {
                  endNow === data.length
                  ? null
                  : <Button className="ml-auto" onClick={this.nextSlideNow}>
                      <img src={RightArrow} width='20' height='20' alt=''/>
                    </Button>
                } 
              </div> 
  {                
                  endPop === data.length                  
                  ? null
                  : <CardMoviePopular data={data.slice(startPop, endPop)}/>
                }
              </div>
              <div className="d-flex btn-toggle">
                {
                  startPop === 0
                  ? null
                  : <Button className='mr-auto' onClick={this.prevSlidePop}>
                      <img src={LeftArrow} width='20' heigth='20' alt=''/>
                    </Button>
                }
                {
                  endPop === data.length
                  ? null
                  : <Button className="ml-auto" onClick={this.nextSlidePop}>
                      <img src={RightArrow} width='20' height='20' alt=''/>
                    </Button>
                } */