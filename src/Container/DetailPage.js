import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'
import config from '../config'

// redux setup
import * as ACTIONS from '../Redux/action/cartTicketAction'
import { connect } from 'react-redux'

import Ticket from '../static/assets/ticket.png'

const baseURL = config.baseURLMovie
const apiKey = config.apiKey
const backdropURL = config.backdropURL

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

class DetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      data: ''
    }
  }

  componentDidMount() {
    this.getDetail()
  }

  getDetail = async() => {
    let id = this.props.match.params.id
    let idx = _.isEmpty(id) ? [] : id
    let datas = await api
      .get(`${baseURL}/movie/${idx}?api_key=${apiKey}&language=en-US`)
        // .then(res => console.log(res))
        // middleware
    let res = datas.data
    this.setState({
      data: res
    })
  }

  // handleClick = () => {
  //   let { data } = this.state

  // }
    
  render() {
    const { data } = this.state
    const { title } = this.props
    console.log(data.title)
    return (
      <div className="">
        <div className="detail">
          { 
            _.isEmpty(data.data) ? 
            <div className="card-detail">
              <img src={`${backdropURL}${data.backdrop_path}`} alt="..."/>
              <h3>{data.title}</h3>
              <p>Overview {data.vote_average}</p> 
              <p>{data.overview}</p>               
            </div>
            : null
          }
        </div>
        <div className="container-ticket">
          <div className="d-flex justify-content-center ticket">
            <h4>Book Ticket</h4>                    
          </div>                       
          <div className="d-flex justify-content-center ticket">
            <div className="card" style={{width: '400'}}>
              <img src={Ticket} alt=''/>
              <div className="card-img-overlay">
                <h4 className="card-title">{data.title}</h4>
              </div>
            </div>
          </div>
          <div className="book-ticket d-flex justify-content-center ticket">
            <button onClick={() => this.props.onDecrementTicket()}>
              -
            </button>
            <span>{this.props.ctr}</span>
            <button onClick={() => this.props.onIncrementTicket()}>
              +
            </button>
            <div className="counter-ticket">          
            {
              this.props.ctr === 0
              ? <button className="btn-book" disabled style={{backgroundColor: 'rgb(240, 85, 80)'}}>Book</button> 
              : <button className="btn-book" onClick={() => this.props.onTitleTicket(title)} >Book</button>
              // onClick={() => this.props.onTitleTicket(title)} assign STATE to parameter
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
    ctr: state.cartTicketReducer.counter,
    success: state.cartTicketReducer.success,
    title: state.cartTicketReducer.title
  }
}

const mapDispatchToProps = dispatch => {
	return {
    onIncrementTicket: () => dispatch(ACTIONS.increment()),
    onDecrementTicket: () => dispatch(ACTIONS.decrement()),
    onTitleTicket: payload => dispatch(ACTIONS.bookedTitle(payload))
    // assign DATA to parameter
  }
}

export default withRouter(
	connect(
		mapStateToProps, 
		mapDispatchToProps
	) (DetailPage)
)