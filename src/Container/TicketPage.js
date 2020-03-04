import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

class TicketPage extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }  
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default withRouter(
  connect(
    mapStateToProps, 
    mapDispatchToProps
  ) (TicketPage)
)