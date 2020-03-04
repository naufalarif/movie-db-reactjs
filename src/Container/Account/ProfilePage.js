import React, { Component } from 'react'
import { withRouter } from 'react-router'
import config from '../../config'
import axios from 'axios'

import { connect } from 'react-redux'

const baseURL = config.baseURLUser

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  async componentDidMount() {
    let datas = await api.get('/api/users/2')
    let res = datas.data.data
    this.setState({
      data: res
    })    
  }

  render() {
    const { data } = this.state
    console.log(this.props.username)
    return (
      <div>
        <div className="container">
          <h1>Who's watching?</h1>
          <div className="card" style={{width: '250px', height: '400px'}}>
            <img src={data.avatar} width="230px" alt='...' className="card-img-top"/>
            <div className="" style={{backgroundColor: 'transparent'}}>
              <h3 style={{color: 'black'}}>{`${data.first_name} ${data.last_name}`}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.userAuthReducer.username
  }
}

export default withRouter(
  connect(mapStateToProps)
  (ProfilePage)
)