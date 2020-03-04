import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { create } from 'apisauce'
import _ from 'lodash'

// redux setup
import { connect } from 'react-redux'
import * as USER_ACTIONS from '../../Redux/action/userAuthAction'
import * as FETCHING_ACTION from '../../Redux/action/fetchingAction'

// style
import { Button } from 'antd'
import config from '../../config'

const baseURL = config.baseURLUser

const api = create({
  baseURL: baseURL
})

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      email: '',
      password: ''
    }
  }

  componentWillUnmount() {
    this.props.unsubscribe()
  }

  handleSubmit = async() => { 
    const { email, password } = this.state
    const { history, isEmptyField, onFailure, onSuccess, onBegin } = this.props
    let data = {
      email: email,
      password: password
    }

    if(!_.isEmpty(email, password)) {        
      onBegin()
      try {        
        let res = await api.post('/api/register', data)
        let dataToken = res.data.token
        if (dataToken !== undefined) {
          onSuccess()
          history.push('/login')
          this.setState({ isLoading: false })
        } else {
          onFailure()
        }        
      } catch {
        onFailure()
      }
    } else {
      isEmptyField()
    }
  }

  render() {    
    const { loading, emptyField, history } = this.props

    return (
      <div className="container">
        <div className="container-register">
          <form className="form">
            <h3>Register</h3>
            <div className="form-group">
              <input type="text" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
              <input type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
              {
                emptyField
                ? <span>Please fill the field!</span>
                : null
              }
              {
                  loading
                  ? <div className="loading-form">
                      <div className="spinner-border text-danger" role="status">
                          <span className="sr-only">Loading...</span>
                      </div>
                    </div>  
                  : <Button onClick={this.handleSubmit}>Register</Button>
                }                       
            </div>
            <div>
                <p>Have an account? <span onClick={() => history.push('/login')}>Login now</span></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.userAuthReducer.auth,
    loading: state.userAuthReducer.loading,
    emptyField: state.fetchingReducer.isEmptyField,    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBegin: () => dispatch(USER_ACTIONS.registerBegin()),
    onSuccess: () => dispatch(USER_ACTIONS.registerSuccess()),
    onFailure: () => dispatch(USER_ACTIONS.registerFailure()),    
    isEmptyField: () => dispatch(FETCHING_ACTION.isEmptyField()),
    unsubscribe: () => dispatch(FETCHING_ACTION.unsubscribeFetch())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) (RegisterPage)
)