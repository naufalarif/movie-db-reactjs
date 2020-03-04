import React, { Component, useState } from 'react'
import { withRouter } from 'react-router'

import Logo from '../../static/assets/logo.png'
import { Navbar } from 'react-bootstrap'
import { NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'

class NavigationBar extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }

  handleSignOut = () => {
    const { history } = this.props
    localStorage.removeItem('token')
    history.push('/login')
  }

  isActive = (type) => {
    this.setState({
      type: type
    })
  }
  render() {
    const { history } = this.props
    const { type } = this.state
    return (
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="navbar-brand" onClick={() => history.push('/')}>
          <img
            src={Logo} alt='...'
            width='80'/>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav">
            <div className="nav-item" onClick={() => this.setState({type: ''})}>
              <div className={( type === '' ? `nav-link active` : `nav-link` )} onClick={() => history.push('')}>Home</div>
            </div>
            <div className="nav-item" onClick={() => this.setState({type: 'tvshow'})}>
              <div className={( type === 'tvshow' ? `nav-link active` : `nav-link` )} onClick={() => history.push('/tvshow')}>Tv Show</div>
            </div>
            <div className="nav-item" onClick={() => this.setState({type: 'movie'})}>
              <div className={( type === 'movie' ? `nav-link active` : `nav-link` )} onClick={() => history.push('/movie')}>Movie</div>
            </div>
            <div className="nav-item">
              <div className="nav-link">Latest</div>
            </div>
          </div>        
        </div>
      </nav>   
    )
    // <div className={( type === 'tvshow' ? `nav-link active` : `nav-link` )}>Tv Show</div>
  }
}

export default withRouter(NavigationBar)