import React, { Component } from 'react'
import { withRouter } from 'react-router'
import config from '../../config'
import _ from 'lodash'

// const[id, setId] = useState('')

class CardMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0
    }
  }

  handleClick = (id) => {
    let idx = id
    this.setState({
      id: idx
    })    
    this.props.history.push(`/detailpage/${idx}`)
  }

  minifyText = result => {    
    if(!_.isEmpty(result)) {
      if(result.name > 20) {
        return (
          <div>
            <p>
              {result.name.substring(0, 20) + '...'}
            </p>
          </div>
        )
      } else {
        return (
          <div>
            <p>
              {result.name}
            </p>
          </div>
        )
      }
    }
  }
  
  render() {
  const {results = []} = this.props  
  return (
    <div className="row">
        {
          results.map((result, idx) => {
            return (
              result.backdrop_path === null
                ? null
                : <div key={idx} className="card" style={{color: 'black'}}>
                  <img
                    className="card-img-top"                                                    
                    src={`${config.posterURL}${result.poster_path}`} 
                    height='250'
                    alt='...' 
                    onClick={(id) => this.handleClick(result.id)} 
                  /> 
                  <div className="card-body">
                    <div className="card-text">
                      { 
                        this.minifyText(result)
                      }
                    </div>
                    <div className="card-text">{result.vote_average}</div>
                  </div>
                </div>
              )
            })
          }
        </div>      
    )
  }
}

export default withRouter(CardMovie)