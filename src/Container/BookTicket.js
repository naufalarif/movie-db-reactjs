import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class BookTicket extends Component {
  render() {
    return (
      <div>
				
      </div>
    )
  }
}

const mapStateToProps = () => {
	return
}

const mapDispatchToProps = () => {
	return
}

export default withRouter(
	connect(
		mapStateToProps, 
		mapDispatchToProps
	) (BookTicket)
)
