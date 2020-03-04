import React, { Component } from 'react'
import { withRouter } from 'react-router'
import config from '../../config'
import _ from 'lodash'

import Star from '../../static/assets/star.svg'

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

  minifyText = () => {
    const {results = []} = this.props   
    if(_.isEmpty(results)) {
      if(results.name.length > 14) {
        return (
          <div>
            <div>
              {results.title.substring(0, 14) + '...'}
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <div>
              {results.title}
            </div>
          </div>
        )
      }
    }
  }

  highRate = () => {
    for(let i=0; i<=4; i++) {
      console.log(i)
      return (
        <div className='d-flex inline'>
          <img src={ Star } width='15' alt='...'/>
        </div>
      )
    }
  }

  mediumRate = () => {
    for(let i=0; i<=3; i++) {
      console.log(i)
      return (
        <div className='d-flex inline'>
          <img src={ Star } width='15' alt='...'/>
        </div>
      )
    }
  }
  
  render() {
  const {results = []} = this.props
  if(results === undefined) {
    return (
      <div><h1>Loading</h1></div>
    )
  } else {
  return (
    <div className="d-flex inline justify-content-center">
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
                          _.isEmpty(result.title)
                          ? result.title
                          : result.title.length > 17
                          ? result.title.substring(0, 17) + '...'
                          : result.title
                        }
                      </div>
                    <div className="card-text">
                      {/* { !_.isEmpty(result.vote_average) ? null : result.vote_average >= 7  ? 
                        : <div>3</div>
                      } */}
                      {
                        result.vote_average > 9 ? (
                          <div>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                          </div>
                        ): result.vote_average <= 9 ? (
                          <div>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                          </div>
                        ): result.vote_average <= 6 ? (
                          <div>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>
                          </div>
                        ): result.vote_average <= 3 ? (
                          <div>
                            <img src={Star} alt='' width='15'/>
                            <img src={Star} alt='' width='15'/>                            
                          </div>
                        ): <div>
                            <img src={Star} alt='' width='15'/>
                          </div>
                      }
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>      
    )
  }
}
}

export default withRouter(CardMovie)