import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { create } from 'apisauce'
import _ from 'lodash'
import config from '../../config'

// redux setup
import * as USER_ACTIONS from '../../Redux/action/userAuthAction'
import * as FETCHING_ACTION from '../../Redux/action/fetchingAction'
import { connect } from 'react-redux'
import { Button } from 'antd'

const baseURL = config.baseURLUser

const api = create({
  baseURL: baseURL
})

class LoginPage extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  componentWillUnmount() {
    this.props.unSubscribe()
  }

  handleSubmit = async() => {
    const { history, 
      isValidated, 
      isEmptyField, 
      onSuccess, 
      onFailure, 
      onBegin } = this.props

    const { email, password } = this.state

    let data = {
      email: email,
      password: password,
      token: ''
    }

    if(!_.isEmpty(this.state.email, this.state.password)) {     
      onBegin()
        try {
          let res = await api.post('/api/login', data)          
          let dataToken = await res.data.token
          this.setState({ token: dataToken })
          if(dataToken !== undefined) {
            localStorage.setItem('token', this.state.token)            
            history.push('/')
          } else {            
            isValidated()
            this.setState({ token: 'isEmpty'})
          }
        onSuccess()
        } catch {
          onFailure()
        }    
    } else {
      isEmptyField()
    }
  }

  // eve.holt@reqres.in
  // cityslicka
  render() {
    const { email, password } = this.state
    const { validated, emptyField, history, loading } = this.props    

    return (
      <div className="container">
        <div className="container-login">      
          <form className="form">
            <div className="form-group">
              <h3>Sign In</h3>
              <div>
                <input type="text" placeholder="Username" value={email} 
                  onChange={(e)=> this.setState({ email: e.target.value })}/>
                <br/>
                <input type="password" placeholder="Password" value={password} 
                  onChange={(e)=> this.setState({ password: e.target.value })}/>
                <br/>
                  {
                    emptyField
                    ? <span>Please fill the field!</span>
                    : null
                  }
                  {
                    validated
                    ? <span>Username or password incorrect!</span>
                    : null
                  }
              </div>
              <div>
                {
                  loading
                  ? <div className="loading-form">
                      <div className="spinner-border text-danger" role="status">
                          <span className="sr-only">Loading...</span>
                      </div>
                    </div>  
                  : <Button onClick={this.handleSubmit}>Log in</Button>
                }
              </div>                                            
              <div>
                <p>New to Netflix? <span onClick={() => history.push('/register')}>Sign up now</span></p>
              </div>
            </div>
          </form>                  
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.userAuthReducer.loading,
    auth: state.userAuthReducer.auth,
    validated: state.fetchingReducer.isValidated,
    emptyField: state.fetchingReducer.isEmptyField,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBegin: () => dispatch(USER_ACTIONS.loginBegin()),
    onSuccess: () => dispatch(USER_ACTIONS.loginSuccess()),
    onFailure: () => dispatch(USER_ACTIONS.loginFailure()),    
    isValidated: () => dispatch(FETCHING_ACTION.isValidated()),
    isEmptyField: () => dispatch(FETCHING_ACTION.isEmptyField()),
    unSubscribe: () => dispatch(FETCHING_ACTION.unsubscribeFetch())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) (LoginPage)
)